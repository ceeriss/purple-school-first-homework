import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import { MovieCard } from "./components/MovieCard";
import Paragraph from "./components/Paragpaph/Paragraph"
import SearchForm from "./components/SearchForm/SearchForm";
import SearchInput from "./components/SearchInput/SearchInput";
import Zagolovok from "./components/Zagolovok.jsx/Zagolovok"
import {movies} from "./components/Movie.mockData";
import AppStyles from "./components/AppStyles.module.css";


function App() {
  const text = "Поиск"
  const pText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  return (
    <div className={AppStyles.main_div}>
      <Layout />
      <Zagolovok text={text} />
      <Paragraph pText={pText} />
      <SearchForm />
      <div className={AppStyles.div_flex}>
        {movies.map((movie) => (
          <MovieCard
            rating={movie.rating}
            img={movie.img}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App
