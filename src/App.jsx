import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import Paragraph from "./components/Paragpaph/Paragraph"
import SearchForm from "./components/SearchForm/SearchForm";
import SearchInput from "./components/SearchInput/SearchInput";
import Zagolovok from "./components/Zagolovok.jsx/Zagolovok"

function App() {
  const text = "Поиск"
  const pText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  return (
    <div className = "px-[120px] py-[20px]">
      <Layout/>
      <Zagolovok text={text} />
      <Paragraph pText={pText} />
      <SearchForm/>
    </div>
  );
}

export default App
