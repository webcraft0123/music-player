"use client";
import debounce from "debounce";
import { FaFolder } from "react-icons/fa";
import { ChangeEvent, useEffect, useState, useCallback } from "react";

export default function SelectMusicFolder() {
  const [musicFolderPath, setMusicFolderPath] = useState("");

  const handleMusicFolderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMusicFolderPath(e.target.value);
  };

  const debounceSavePath = useCallback(
    debounce(musicFolderPath => {
      localStorage.setItem(
        process.env.NEXT_PUBLIC_MUSIC_STORAGE_NAME!,
        musicFolderPath
      );
    }, 1000),
    []
  );

  useEffect(() => {
    if (musicFolderPath !== "") {
      debounceSavePath(musicFolderPath);
    } else {
      setMusicFolderPath(
        localStorage.getItem(process.env.NEXT_PUBLIC_MUSIC_STORAGE_NAME!) || ""
      );
    }
  }, [musicFolderPath]);

  return (
    <div className="py-4">
      <h6 className="text-sm font-bold">Music Folder</h6>
      <div className="w-full flex items-center px-4 py-1 gap-3 rounded-full overflow-hidden">
        <span className="text-lg">
          <FaFolder />
        </span>
        <input
          type="text"
          placeholder="Input folder path which contains all your music files. (ex c:\Users\vaihav-OP\Desktop\music)"
          className="w-full outline-none text-xs"
          onChange={handleMusicFolderChange}
          value={musicFolderPath}
        />
      </div>
    </div>
  );
}
