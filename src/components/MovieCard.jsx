import MovieCardStyles from "./MovieCard.module.css";
export function MovieCard({ title, img, rating }) {
  return (
    <div className={MovieCardStyles.MovieCard_main_div}>
      <div className={MovieCardStyles.MovieCard_secondDiv}>
        <img src="../../public/star.png" alt="" />
        {rating}
      </div>
      <div className={MovieCardStyles.MovieCard_thirdDiv}>
        <img src={img} alt="movie-poster" />
      </div>
      <p className={MovieCardStyles.title}>{title}</p>
      <div className={MovieCardStyles.favorite_div}>
        <img src="../../public/like.png" alt="" />
        <p className={MovieCardStyles.favorite_text}>
          В избранное
        </p>
      </div>
    </div>
  );
}
