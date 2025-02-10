import { Link, NavLink } from "react-router-dom"

function Navbar() {

    const actstyle = {
        color: "red"
    }

    return (
        <div>
            {/* <ul>
                <li><a href={"/"}>Main</a></li>
                <li><a href={"/menu"}>Menu</a></li>
                <li><a href={"/about"}>About</a></li>
            </ul> */}
            {/* <ul>
                <li><Link to="/">메인</Link></li>
                <li><Link to="/menu">메뉴</Link></li>
                <li><Link to="/about">소개</Link></li>
            </ul> */}

            {/* NavLink 는 Link와 사용법 유사. active 여부 파악이 가능하기 때문에 활성화 여부에 따라 클래스 추가 해제 가능 */}

            <ul>
                <li><NavLink to="/" style={({ isActive }) => isActive ? actstyle : undefined}>메인</NavLink></li>
                <li><NavLink to="/menu" style={({ isActive }) => isActive ? actstyle : undefined}>메뉴</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => isActive ? actstyle : undefined}>소개</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;