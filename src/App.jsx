import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MovieList from "./Components/MovieList/MovieList";
import Movie from "./Pages/Home/MovieDetails/Movie"; 

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
