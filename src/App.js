import { BrowserRouter, Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Login from './pages/login/Login';
import Navbar from './components/navbar/Navbar';
import Left from './components/left/Left';
import Right from './components/right/Right';
import Profile from './pages/profile/Profile'
import Home from './pages/home/Home';
import Register from './pages/regsiter/Register';
import './App.scss'
import { useGlobalContext } from './Context';

function App() {

  const { mode } = useGlobalContext();
  const currentUser = true;

  const Layout = () => {
    return (
      <div className='app' style={mode ? { backgroundColor: "#03001C", color: "white" } : { backgroundColor: "#d6d6d6" }}>
        <Navbar />
        <div style={{ display: "flex", gap: "50px" }}>
          <div style={{ flex: 2 }}>
            <Left />
          </div>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <div style={{ flex: 3 }}>
            <Right />
          </div>
        </div>
      </div >
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    } else {
      return children
    }
  }

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
