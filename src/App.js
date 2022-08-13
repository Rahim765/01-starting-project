import BackImg from "./assets/Untitled.png";
import React, { useState } from "react";
import "./App.css";
import "./font/iran-sans.ttf";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Structure from "./components/Structure";
import "./components/Structure.css";
import ButtonContext from "./Context/button-context";
import Charts from "./components2/Charts";
import SecondComponent from "./components2/SecondComponent";
import ThirdComponent from "./components3/ThirdComponent";
function App() {
  const [page, setPage] = useState(2);
  var clname = "body" + page;

  return (
    <div className={clname}>
      <ButtonContext.Provider
        value={{
          setPage: setPage,
          page: page,
        }}
      >
        {/* {page === 2 && <img className="back" src={BackImg} alt=""></img>} */}
        <section className="struct">
          <div>
            <Profile></Profile>
          </div>
          <div>
            <Header></Header>
          </div>
          {page === 2 && <Structure></Structure>}
          {page === 5 && <SecondComponent></SecondComponent>}
          {page === 7 && <ThirdComponent></ThirdComponent>}
        </section>
      </ButtonContext.Provider>
    </div>
  );
}

export default App;
