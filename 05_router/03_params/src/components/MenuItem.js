import itemStyle from "./MenuItem.module.css"
import { NavLink } from "react-router-dom"

function MenuItem({ menu }) {

    return (
        <NavLink to={`/menu/${menu.menuCode}`}>
            <div className={itemStyle.menuItem}>
                <div>code : {menu.menuCode}</div>
                <div>name : {menu.menuName}</div>
            </div>
        </NavLink>
    )

}

export default MenuItem;