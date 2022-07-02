import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const movieDetails = [
    { name: "The Dark Knight (2008)", rating: "(9.0)", category: "Action" },
    {
      name: "The Lord of the Rings: The Return of the King (2003)",
      rating: "(9.0)",
      category: "Action"
    },
    {
      name: " The Shawshank Redemption (1994)",
      rating: "(9.3)",
      category: "Drama"
    },
    {
      name: "The Godfather (1972)",
      rating: "(9.2)",
      category: "Drama"
    },
    {
      name: " Teasing Master Takagi-san: The Movie (2022)",
      rating: "(9.8)",
      category: "Romance"
    },
    {
      name: "Prem Prakaran",
      rating: "(9.7)",
      category: "Romance"
    },
    {
      name: "FearLife (2013)",
      rating: "(10.0)",
      category: "Thriller"
    },
    {
      name: " Translucid (2014)",
      rating: "(10.0)",
      category: "Thriller"
    }
  ];

  const movieCategory = ["Action", "Drama", "Romance", "Thriller"];

  return (
    <div className="App">
      <h1>movies</h1>
      <hr />
      <p>Checkout my favorite Movies. Select a genre to get started</p>
      {movieCategory.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}

      <hr />
      {movieDetails.map((movie) => {
        if (selectedCategory === movie.category) {
          return (
            <div className="movie-name">
              {movie.name}
              <span>{movie.rating}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
