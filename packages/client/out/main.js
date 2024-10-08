import { example } from "@example/common";

import { app, BrowserWindow } from "electron";

function createWindow() {
  example();

  const win = new BrowserWindow();

  win.on("closed", () => {
    app.quit();
  });
}

app.whenReady().then(createWindow);
