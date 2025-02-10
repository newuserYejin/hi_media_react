import { useSearchParams } from 'react-router-dom'
import boxStyle from "./Menu.module.css"
import { useState, useEffect } from 'react';
import { getSearchList } from '../apis/MenuAPI';
import MenuItem from '../components/MenuItem';

/*
    pathVariable 은 useParam /product/123
    쿼리스트링은 useSearchParam /product?productId=1234
*/

function MenuSearchResult() {

    const [searchParam] = useSearchParams()

    console.log("searchParam : ", searchParam)

    const menuName = searchParam.get("searchParam")

    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        setMenuList(getSearchList(menuName))
    }, [])

    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem menu={menu} />)}
            </div>
        </>
    )

}

export default MenuSearchResult;