import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getMenuInfo } from "../apis/MenuAPI";

function MenuDetail() {

    const { id } = useParams();

    const [menuInfo, setMenuInfo] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {},
    })

    useEffect(() => {
        const result = getMenuInfo(id)[0]

        setMenuInfo(result)
    }, [id])

    return (
        <>
            <h2>{menuInfo.menuName} 상세 조회</h2>
            <h3>{menuInfo.menuPrice}원</h3>
            <h3>{menuInfo.categoryName}</h3>
            <div>
                <div>{menuInfo.detail.description}</div>
                <img src={menuInfo.detail.image} alt="상품 이미지" style={{ maxWidth: "50%" }} />
            </div>
        </>
    )
}

export default MenuDetail;