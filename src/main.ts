import path from "path";
import { app, BrowserWindow, ipcMain } from "electron";
import Logger from "./core/logger/Logger";
import { Signal } from "./core/Signal";


const logger = new Logger("Electron");

let windowProp: BrowserWindow;

const createWindow = (): void => {
    windowProp = new BrowserWindow({
        height: 720,
        width: 1280,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            nodeIntegrationInWorker: false,

            // Disallow integration with Node.js in the render process.
            preload: path.join(__dirname, "./core/Preload.js")
        }
    });

    windowProp.loadFile(path.join(__dirname, "./index.html")).then(_ => {
        logger.pInfo("Html file loaded.")
    });
};

app.whenReady().then(createWindow).then(_ => {
    logger.pInfo("Window was created!")
});

// #region ipc

ipcMain.on(Signal.MINIMIZE, () =>
    windowProp.minimize()
);

ipcMain.on(Signal.MAXIMIZE, () =>
    windowProp.maximize()
);

ipcMain.on(Signal.UN_MAXIMIZE, () =>
    windowProp.unmaximize()
);

ipcMain.on(Signal.EXIT, () =>
    windowProp.close()
);

// #endregion