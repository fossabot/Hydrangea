declare global {
    export interface Window {
        titlebar: ITitleBarProvider
    }
}

export type ITitleBarProvider = {
    onExit: () => void
    onMinimize: () => void,
    onMaximize: () => void,
    onUnMaximize: () => void,
}

// @ts-ignore
window.titlebar = window.titlebar || {}

export declare const __title_bar_provider__: ITitleBarProvider;