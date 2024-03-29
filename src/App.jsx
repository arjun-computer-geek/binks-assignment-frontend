import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Signup from './pages/Signup'
import Login from "./pages/Login";
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
function App() {

  return (<>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* protectedRoute */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} index />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
