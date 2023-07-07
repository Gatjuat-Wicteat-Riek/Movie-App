import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: "1rem",
      }}
    >
      {movies.length
        ? movies.map((movie) => (
            <MovieCard
              key={movie.id}
              img={movie.img}
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
            />
          ))
        : null}
    </div>
  );
};

export default MovieList;
