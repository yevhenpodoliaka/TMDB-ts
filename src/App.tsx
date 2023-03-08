import { lazy } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage= lazy(()=>import("./pages/RegisterPage"))
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const LibraryPage= lazy(()=>import("./pages/LibraryPage"))
const NotFound = lazy(() => import('./pages/NotFoundPage'))


export const App = () => {
  
const isLoggedIn= false

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesPage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route
            path="login"
            element={
              isLoggedIn ? <Navigate to="/" replace={true} /> : <LoginPage />
            }
          />
          <Route
            path="register"
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
