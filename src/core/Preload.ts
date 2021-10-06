import { IpcRendererEvent } from "electron/main";
import { contextBridge, ipcRenderer } from "electron"
import { Key } from "./Keys";
import { Signal } from "./Signal";

contextBridge.exposeInMainWorld(Key.TITLE_BAR, {
    onExit: () => ipcRenderer.send(Signal.EXIT),
    onMinimize: () => ipcRenderer.send(Signal.MINIMIZE),
    onMaximize: () => ipcRenderer.send(Signal.MAXIMIZE),
    onUnMaximize: () => ipcRenderer.send(Signal.UN_MAXIMIZE),
})