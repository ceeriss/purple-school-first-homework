import Button from "./components/Button/Button";
import Layout from "./components/Layout/Layout";
import { MovieCard } from "./components/MovieCard";
import Paragraph from "./components/Paragpaph/Paragraph";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchInput from "./components/SearchInput/SearchInput";
import Zagolovok from "./components/Zagolovok.jsx/Zagolovok";
import { movies } from "./components/Movie.mockData";
import AppStyles from "./components/AppStyles.module.css";
import { LoginPage } from "./components/LoginWebPart/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const text = "Поиск";
  const pText =
    "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

  return (
    <Router>
      <div className={AppStyles.main_div}>
        <Routes>
          {/* Страница логина БЕЗ Layout */}
          <Route path="/LoginPage" element={<LoginPage />} />

          {/* Все остальные страницы С Layout */}
          <Route
            path="*"
            element={
              <>
                <Layout />
                <Zagolovok text={text} />
                <Paragraph pText={pText} />
                <SearchForm />
                <div className={AppStyles.div_flex}>
                  {movies.map((movie, index) => (
                    <MovieCard
                      key={index}
                      rating={movie.rating}
                      img={movie.img}
                      title={movie.title}
                    />
                  ))}
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
