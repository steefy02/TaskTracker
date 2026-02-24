# Task Tracker

A lightweight desktop task manager built with Electron. Supports tasks and subtasks, deadlines with color-coded urgency, progress tracking, and notes - all saved automatically to disk.

## Features

- Add tasks and subtasks with deadlines, notes, and progress status
- Deadline colors: blue (>2mo) -> green (1-2mo) -> yellow (1w-1mo) -> orange (≤1 week) -> red (≤3 days / overdue)
- Progress bubbles: not started -> just begun -> halfway -> almost done -> done
- Auto-saves on every change, no manual save needed
- Overall progress bar across all tasks

## Requirements

- [Node.js](https://nodejs.org) (v18 or later recommended)

## Development

```bash
npm install
npm start
```

## Build (Windows executable)

```bash
npm run build
```

This will generate an installer at `dist/task-tracker Setup 1.0.0.exe`. Run it once and the app will be available like any normal desktop program.

## Data

Tasks are saved automatically to:

- **Windows**: `C:\Users\<you>\AppData\Roaming\task-tracker\tasks.json`
- **Mac**: `~/Library/Application Support/task-tracker/tasks.json`
- **Linux**: `~/.config/task-tracker/tasks.json`