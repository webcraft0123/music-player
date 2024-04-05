"use client";

export default function MusicContainer() {
  window.addEventListener("storage", () => {
    console.log("change");
  });
  return <div></div>;
}
