import { createBrowserRouter } from 'react-router-dom'
import { Ads } from '../components/Screens/Ads'
import ErrorPage from '../components/Screens/ErrorPage';
import { Home } from '../components/Screens/Home'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "ads",
      element: < Ads/>,
      errorElement: <ErrorPage />,
    },
  ]);
  

export default router