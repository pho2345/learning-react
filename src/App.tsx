import { Outlet, RouterProvider } from 'react-router';
import routesConfig from './configs/routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex'>
      <Navbar />
      <div>
        <RouterProvider router={(routesConfig)} />
        <Outlet />
      </div>
    </div>

  )
}

export default App;