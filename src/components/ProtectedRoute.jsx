import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import FullScreenLoader from "./FullScreenLoader"

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useSelector(state => state.auth)
    if (loading) return <FullScreenLoader />
    if (!isAuthenticated) return <Navigate to='login' replace />
    return <Outlet />
}
export default ProtectedRoute