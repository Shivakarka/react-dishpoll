import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://static.guim.co.uk/sys-images/Guardian/Pix/red/blue_pics/2009/04/14/pasta460.gif"
        alt="food"
      />
      <h1> Vote your Favourite Dish</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="flex-column">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block mt-5 me-5 ms-3"
            onClick={() => {
              navigate("/pollpage");
            }}
          >
            Start Vote
          </button>
          <button
            type="button"
            class="btn btn-success btn-lg btn-block mt-5 me-5 ms-3"
            onClick={() => {
              navigate("/results");
            }}
          >
            See Results
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
