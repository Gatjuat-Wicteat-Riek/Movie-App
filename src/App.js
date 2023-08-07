import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieListContainer from "./Components/MovieListContainer";
import CounterReducer from "./Redux/CounterReducer.jsx";
import Description from "./Components/Description";
function App() {
  return (
    <>
      <div className="App">
        {/* <CounterReducer /> */}
        <MovieListContainer />
        <Routes>
          <Route path="/description" element={<Description />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
