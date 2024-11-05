import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';
import MoreNfts from 'components/MoreNfts/MoreNfts';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from 'components/App/Header/Header';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          path: '/',
          element: <App />,
        },

        {
          path: 'more-nfts',
          element: <MoreNfts />,
        },
      ],
    },
  ],
  { basename: '/NFT-webpage-backend-' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
