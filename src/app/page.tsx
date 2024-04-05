import SearchBar from "@/components/Search-bar";
import MusicContainer from "@/components/MusicContainer";
import SelectMusicFolder from "@/components/Select-music-folder";

export default function Home() {
  return (
    <>
      <SearchBar />
      <SelectMusicFolder />
      <MusicContainer />
    </>
  );
}
