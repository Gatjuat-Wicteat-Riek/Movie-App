import React from "react";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Description</h1>
      <p>
        This is a movie is produced in 1967 by Colombia National treasure for
        peace movie academy. From there then, we had only 4 movies watched in
        the entire region. this gave rise to production of more movies till now,
        this became the best ever to be produced.
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Description;
