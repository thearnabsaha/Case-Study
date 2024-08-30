import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound.jsx'
import Credentials from './Pages/Credentials/Credentials.jsx'
import RequesterDashBoard from './components/RequesterDashBoard/RequesterDashBoard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/cred",
        element:<Credentials/>
      },
      {
        path:"/rhome",
        element:<RequesterDashBoard/>
      },
      {
        path:"*",              
        element:<NotFound/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
