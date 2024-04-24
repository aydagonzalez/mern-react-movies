import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from "../../data.js";
import './App.css';
     


export default function App() {
  const [user, setUser] = useState(null)

  console.log(user)

  function addUser(username) {
    console.log(username)
    setUser(username);
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} /> 
          <Routes>
            <Route path='/' element={<MoviesListPage movies={movies} />} />
            <Route path='/movies/:movieName' element={<MovieDetailPage movies={movies} />} />
            <Route path='/actors' element={<ActorListPage />} />
            <Route path='/actors/:actorName' element={<ActorDetailPage  movies={movies} />} />

          </Routes>
        </>
        : <LoginPage  addUser={addUser} />

      }
    </main>
  );
}
