import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
import './layout.css'

function Layout() {

    return (
        <>
            <Header />
            <div className="mainContentDiv">
                <Outlet />
            </div>
            <Footer />
        </>
    )

}

export default Layout