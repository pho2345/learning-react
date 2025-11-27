import { NavLink } from 'react-router';
import { useTheme } from '../providers';

function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {
        theme === 'light' ? (
          <div className="p-4 m-4 bg-white text-blue-500">
            Light
          </div>
        ) : (
          <div className="p-4 m-4 bg-black text-white dark:bg-white dark:text-red-500">
            Dark
          </div>
        )
      }

      {
        theme === 'light' ? (
          <button className="p-2 m-2  text-white bg-background" onClick={() => setTheme('dark')}>
            Dark mode
          </button>
        ) : (
          <button className="p-2 m-2 bg-background dark:text-blue-300" onClick={() => setTheme('light')} >
            Light mode
          </button>
        )
      }

      <NavLink to="/signin" className="p-2 m-2 bg-background dark:text-blue-300">
        Signin
      </NavLink>
    </>
  )
}

export default Home;