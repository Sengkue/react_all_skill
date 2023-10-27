import React from "react";
import ModalBook from "./ModalBook";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* <DatePick /> */}
          <input
            type="date"
            id="birthday"
            name="birthday"
            style={{
              width: "200px",
              borderRadius: "5px",
              padding: "5px",
              border: "1px solid black",
              backgroundColor: "white",
              outline: "none",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <ModalBook />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginRight: "20px" }}>Report boot meeting room</h3>
        <h3>10/26/2023</h3>
      </div>
      <Card />
    </div>
  );
};

export default Home;
