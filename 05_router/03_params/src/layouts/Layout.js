import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function Layout() {

    return (
        <>
            <Header />
            <Navbar />
            {/* 라우팅 된 주소에 따라 자식을 렌더링하는 역할을 한다. */}
            <Outlet />
        </>
    )

}

export default Layout;