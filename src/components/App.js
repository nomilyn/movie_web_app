import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MovieContext from "../context/MovieContext";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import TVShowsPage from "../pages/TVShowsPage";
import MovieDescriptionPage from "../pages/MovieDescriptionPage";
import TVShowDescriptionPage from "../pages/TVShowDescriptionPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import SearchPage from "../pages/SearchPage";
import SearchMovieOrTVShowList from "../components/SearchMovieOrTVShowList";
import DashboardPage from "../pages/DashboardPage";

import Footer from "../components/Footer";
import Navbar from "./Navbar/Navbar";

import '../assets/css/App.css'


const App = () => {
  const [movies, setMovies] = useState([]); 
  const [tvshows, setTVShows] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [id, setId] = useState([]);

  const [activeUser, setUser] = useState(
    {
      user: "Guest",
      email:"",
      firstName:"",
      lastName:""
    }
  );
  
  return (
    <MovieContext.Provider value={{movies, setMovies, tvshows, setTVShows, users, setUsers, activeUser, id, setId}}>
      <Router>
      <Navbar /> 
        <Switch>
          <Route  exact path="/"><HomePage/></Route>
          <Route  exact path="/movies"><MoviesPage/></Route>
          <Route  exact path="/movies/:id"><MovieDescriptionPage/></Route>
          <Route  exact path="/tvshows"><TVShowsPage/></Route>
          <Route  exact path="/tvshows/:id"><TVShowDescriptionPage/></Route>
          <Route  exact path="/search"><SearchPage/></Route>
          <Route  exact path="/sign-up"><SignUpPage/></Route>
          <Route  exact path="/login"><LoginPage/></Route>
          <Route  exact path="/about-us"><AboutUsPage/></Route>
          <Route  exact path="/contact-us"><ContactUsPage/></Route>
          <Route  exact path="/SearchMovieOrTVShowList"><SearchMovieOrTVShowList/></Route>
          <Route  exact path="/dashboard"><DashboardPage/></Route>
        </Switch>
        <Footer/>
      </Router>
    </MovieContext.Provider>
  )
}

export default App
