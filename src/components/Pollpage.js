import React, { useEffect, useState } from "react";
import axios from "axios";

function Pollpage() {
  const [data, setData] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        setData(res.data);
        // console.log(res);
      });
  }, []);

  const handleRank1 = (e) => {
    if (e !== second && e !== third) {
      localStorage.setItem("rank1", e);
      setFirst(e);
    }
  };
  const handleRank2 = (e) => {
    if (e !== first && e !== third) {
      localStorage.setItem("rank2", e);
      setSecond(e);
    }
  };
  const handleRank3 = (e) => {
    if (e !== second && e !== first) {
      localStorage.setItem("rank3", e);
      setThird(e);
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {data.length > 0
        ? data.map((item, index) => (
            <div
              key={item.id}
              class="card col-md-3 mb-5 me-3 shadow "
              style={{ width: "300px" }}
            >
              <div className="h-100">
                <div className="card h-100 text-center p-4">
                  <img
                    src={item.image}
                    alt="dish-pic"
                    className="card-img-top img-fluid mb-2"
                  />
                  <h2>{item.dishName}</h2>
                  <p>{item.description}</p>
                  <div>
                    <button
                      className="btn-outline-dark me-3 "
                      style={{
                        background: item.id === first ? "orange" : "white",
                      }}
                      onClick={() => handleRank1(item.id)}
                    >
                      1
                    </button>
                    <button
                      className="btn-outline-dark me-3"
                      style={{
                        background: item.id === second ? "orange" : "white",
                      }}
                      onClick={() => handleRank2(item.id)}
                    >
                      2
                    </button>
                    <button
                      className="btn-outline-dark me-3"
                      style={{
                        background: item.id === third ? "orange" : "white",
                      }}
                      onClick={() => handleRank3(item.id)}
                    >
                      3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Pollpage;
