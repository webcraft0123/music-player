"use client";
import { WebviewWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [appWindow, setAppWindow] = useState<WebviewWindow>();

  async function setupAppWindow() {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    setAppWindow(appWindow);
  }

  useEffect(() => {
    setupAppWindow();
  }, []);

  const close = () => appWindow?.close();
  const minimize = () => appWindow?.minimize();
  const toggleMaximize = () => appWindow?.toggleMaximize();

  return (
    <div
      data-tauri-drag-region
      className="flex justify-end gap-1 px-2 py-2 w-full fixed">
      <button
        onClick={minimize}
        className="w-4 h-4 bg-[#00CA4E] rounded-full"
      />
      <button
        onClick={toggleMaximize}
        className="w-4 h-4 bg-[#FFBD44] rounded-full"
      />
      <button onClick={close} className="w-4 h-4 bg-[#FF605C] rounded-full" />
    </div>
  );
}
