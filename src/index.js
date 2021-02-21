const { app, BrowserWindow } = require('electron')


function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 200,
    minimizable: false,
    maximizable: false,
    icon: __dirname + "/icon/icon.png",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setMenuBarVisibility(false);
  win.loadFile('./src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
