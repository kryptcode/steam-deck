import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RecoilRoot } from 'recoil'
import App from './App'
import './index.css'
import Software from './pages/software'
import Tech from './pages/tech'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tech",
    element: <Tech />,
  },
  {
    path: "/software",
    element: <Software />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
