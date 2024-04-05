import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center py-1 gap-3 rounded-full overflow-hidden">
      <span>
        <FaSearch />
      </span>
      <input
        type="text"
        className="w-full outline-none text-xs"
        placeholder="Find your favourite "
      />
    </div>
  );
}
