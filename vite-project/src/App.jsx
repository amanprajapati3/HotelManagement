import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useLocation } from "react-router-dom"

const App = () => {

 const isOwnerPath = useLocation().pathname.includes("dashboard");

  return (
    <>
    {!isOwnerPath && <Navbar/>}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App