import React, { useEffect, useState } from "react";
import axios from "axios";

function Pollpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        setData(res.data);
        console.log(res);
      });
  }, []);

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
                    <button className="btn-outline-dark me-3">1</button>
                    <button className="btn-outline-dark me-3">2</button>
                    <button className="btn-outline-dark me-3">3</button>
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
