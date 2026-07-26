import {app, BrowserWindow} from 'electron';
 
function createWindow() {
    const mainWindow =new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    // mainWindow.loadFile('index.html');
    mainWindow.loadURL('https://www.google.com');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    return mainWindow;
}
app.whenReady().then(()=>{
    createWindow();
});