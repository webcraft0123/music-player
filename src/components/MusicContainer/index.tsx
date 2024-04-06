"use client";

import { useCallback, useEffect } from "react";

export default function MusicContainer() {
  const handleStorageOnChange = useCallback(() => {
    console.log("change");
  }, []);

  useEffect(() => {
    const currectMusicFolderPath = window.localStorage.getItem(
      process.env.NEXT_PUBLIC_MUSIC_STORAGE_NAME!
    );
    window.addEventListener("storage", handleStorageOnChange, false);

    if (currectMusicFolderPath) {
    }

    return () => window.removeEventListener("storage", handleStorageOnChange);
  }, []);
  return <div></div>;
}
