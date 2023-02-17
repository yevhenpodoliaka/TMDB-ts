import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';

const  Layout=()=> {
  return (
    <div className='App'>
      <Header />
      <main>
        <Suspense fallback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout