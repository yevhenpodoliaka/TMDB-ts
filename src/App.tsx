import { lazy ,useEffect} from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import useUserContext from 'hooks/useUserContext';
import { fetchCurrentUser } from 'service/auth-service';
import { getAllMovies } from 'service/db-api-service';
import Layout from "./components/Layout/Layout";
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage= lazy(()=>import("./pages/RegisterPage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const LibraryPage= lazy(()=>import("./pages/LibraryPage"))
const NotFound = lazy(() => import('./pages/NotFoundPage'))


export const App = () => {
  const { isLoggedIn, token,logInUser } = useUserContext()

  useEffect(() => {

    if (token) {
          fetchCurrentUser(token)
      .then((data) => {
        if (data) {
        logInUser( data.user.name, token);
      }})
      .catch(e=>console.log(e))
    }

  }, [logInUser, token])

//зберігання колекції користувача до LocalStorage
  useEffect(() => {
    if (isLoggedIn) {

      getAllMovies()
        .then(data => localStorage.setItem('savedMovies', JSON.stringify(data?.movies)))
        .catch(e => console.log(e));
    }
    if (token === "") {
     localStorage.setItem('savedMovies', "")
    }
  }, [isLoggedIn,token])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesPage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
          <Route
            path="/library"
            element={
              isLoggedIn ? <LibraryPage /> : <Navigate to="/login" replace={true} />
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/" replace={true} /> : <LoginPage />
            }
          />
          <Route
            path="/register"
            element={
              isLoggedIn ? <Navigate to="/" replace={true} /> : <RegisterPage />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
