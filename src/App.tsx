import { lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Navigate } from 'react-router-dom';
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
// const Cast =lazy(()=>import('./Cast/Cast'))
// const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'))
const NotFound =lazy(()=>import('./pages/NotFound'))


export const App = () => {
  return (< >
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="/movies" replace={true} />} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
              {/* <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<MovieReviews/>}/> */}
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  </>

  );
};
