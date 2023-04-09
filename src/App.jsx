import { Route, Routes } from "react-router-dom"
import { Home, Login, Signup } from "./pages"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { ProtectedRoute } from "./components";

function App() {


  return (<>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} index />
      </Route>
    </Routes>
  </>
  )
}

export default App
