"use client";
import { appWindow } from "@tauri-apps/api/window";

export default function Navbar() {
  return (
    <div data-tauri-drag-region className="flex gap-1 px-2 py-2">
      <button
        onClick={() => appWindow.close()}
        className="w-4 h-4 bg-[#FF605C] rounded-full"
      />
      <button
        onClick={() => appWindow.toggleMaximize()}
        className="w-4 h-4 bg-[#FFBD44] rounded-full"
      />
      <button
        onClick={() => appWindow.minimize()}
        className="w-4 h-4 bg-[#00CA4E] rounded-full"
      />
    </div>
  );
}
