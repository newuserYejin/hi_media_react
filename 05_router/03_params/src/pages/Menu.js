// 프로젝트 시작 시 보여줄 페이지
import boxStyle from "./Menu.module.css"
import { useEffect, useState } from 'react'
import { getMenuList } from "../apis/MenuAPI";
import MenuItem from "../components/MenuItem";
import { useNavigate } from "react-router-dom"

function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [menuName, setMenuName] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        /* Menu 컴포넌트는 마운트 되는 시점에 데이터를 가져와 state에 담아 준다. */
        setMenuList(getMenuList())
    }, [])

    function changeHandler(e) {
        setMenuName(e.target.value)
    }

    function clickHandler() {
        setMenuList(getMenuList(menuName.trim()))
        setMenuName('')
    }

    useEffect(() => {
        console.log("menuName: ", menuName)
    }, [menuName])

    function dblHandler(e) {
        const searchValue = e.target.previousSibling.value.trim();
        navigate(`/menu/search?searchParam=${searchValue}`)
    }

    return (
        <>
            <h1>하이미디어 메뉴뉴 입니다.</h1>
            <div className={boxStyle.searchBox}>
                <input type="text" placeholder="메뉴명을 입력하세요" name="menuName" onChange={changeHandler} />
                <button onClick={clickHandler} onDoubleClick={dblHandler}>검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    )
}

export default Menu;