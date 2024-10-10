// rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// library imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// actions
import { logoutAction } from './actions/logout'

// Routes
import Dashboard, { dashboardLoader } from './pages/Dashbord'
import Error from './pages/Error'

// Layouts
import Main, { mainLoader } from './layouts/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
      {
        path: '/logout',
        action: logoutAction,
      },
    ],
  },

  {
    path: '*',
    element: <Error />,
  },
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} /> <ToastContainer />
    </div>
  )
}

export default App
