import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';

// Route
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteError from './components/route-error/RouteError.js';

// Pages
import App from './App.js';
import Loader from './components/Loader/Loader.js';
import UnderMaintainance from './pages/UnderMaintainance/UnderMaintainance.js';
import SuccessStory1 from './pages/success-story/SuccessStory1.js';
import Testimonal from './components/testimonal/Testimonal.js';
// Dynamic Loading | Code Spliting
const Home = lazy(() => import('./pages/home/Home.js'));
const About = lazy(() => import('./pages/about/About.js'));
const Services = lazy(() => import('./pages/services/Services.js'));
const SuccessStory = lazy(() => import('./pages/success-story/SuccessStory.js'));
const Nopage=lazy(()=>import('./pages/nopage/Nopage.js'));
const Explore=lazy(()=>import('./pages/explore/explore.js'));
const Services1=lazy(()=>import('./pages/service/services.js'));

const root = ReactDom.createRoot(document.getElementById('root'));

// Route configurations
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <RouteError />,
      },
      {
        path: '/home',
        element: <Home />,
        errorElement: <RouteError />,

      },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={<Loader/>}>
            <About />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<Loader/>}>
            <Services />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },

      {
        path: '/success-story',
        element: (
          <Suspense fallback={<Loader/>}>
            <SuccessStory />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '/underMaintainance',
        element: (
          <Suspense fallback={<Loader/>}>
            <UnderMaintainance />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '/explore',
        element: (
          <Suspense fallback={<Loader/>}>
            <Explore />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '/services1',
        element: (
          <Suspense fallback={<Loader/>}>
            <Services1 />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '/success-story1',
        element: (
          <Suspense fallback={<Loader/>}>
            <SuccessStory1 />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },{
        path: '/testimonal',
        element: (
          <Suspense fallback={<Loader/>}>
            <Testimonal />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loader/>}>
            <Nopage />
          </Suspense>
        ),
        errorElement: <RouteError />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRoutes} />);
