import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound.jsx'
import Credentials from './Pages/Credentials/Credentials.jsx'
import RequesterDashBoard from './components/RequesterDashBoard/RequesterDashBoard.jsx'
import RequestDetails from './components/RequestDetails/RequestDetails.jsx'
import CafDashboard from './Pages/CafDashboard/CafDashboard.jsx'
import CRDetails from './components/CRDetails/CRDetails.jsx'
import TDashboard from './Pages/TDashboard/TDashboard.jsx'
import TRDetails from './components/TRDetails/TRDetails.jsx'

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
        path:"/chome",
        element:<CafDashboard/>
      },
      {
        path:"/thome",
        element:<TDashboard/>
      },
      {
        path:"/request-details/:requestID",
        element:<RequestDetails />
      },
      {
        path:"/cr-details/:requestID",
        element:<CRDetails />
      },
      {
        path:"/t-details/:requestID",
        element:<TRDetails />
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
