const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

const DATA_FILE = path.join(app.getPath('userData'), 'tasks.json')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    title: '',
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    autoHideMenuBar: true
  })

  win.loadFile('index.html')
}

// Load tasks from disk
ipcMain.handle('load-tasks', () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8')
      return JSON.parse(raw)
    }
  } catch (e) {
    console.error('Failed to load tasks:', e)
  }
  return []
})

// Save tasks to disk
ipcMain.handle('save-tasks', (event, tasks) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), 'utf-8')
    return true
  } catch (e) {
    console.error('Failed to save tasks:', e)
    return false
  }
})

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())
