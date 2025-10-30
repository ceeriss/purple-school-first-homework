import Button from "../Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import SearchStyles from "./SearchForm.module.css";
export default function SearchForm({ search, onSearchChange }) {
  const btnText = "Поиск";
  const placeholder = "Введите название";
  return (
    <div className={SearchStyles.SearchForm_div}>
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder={placeholder}
        img={
          <img
            src="public/search.png"
            alt="search"
            className={SearchStyles.SearchForm_img}
          />
        }
      />
      <Button btnText={btnText} />
    </div>
  );
}