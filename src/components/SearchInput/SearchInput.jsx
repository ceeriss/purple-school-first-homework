import SearchInputStyles from "./SearchInput.module.css";
export default function SearchInput({ placeholder, img }) {
  return (
    <div>
      <input
        className={SearchInputStyles.SearchInput}
        type="search"
        placeholder={placeholder}
      />
      {img}
    </div>
  );
}
