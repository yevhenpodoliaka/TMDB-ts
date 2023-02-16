import { lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
// const Cast =lazy(()=>import('./Cast/Cast'))
// const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'))
const NotFound =lazy(()=>import('./pages/NotFoundPage'))


export const App = () => {
  return (< >
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<MoviesPage />} />
          <Route path="movie/:movieId" element={<MovieDetailsPage />}>
              {/* <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<MovieReviews/>}/> */}
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  </>

  );
};
