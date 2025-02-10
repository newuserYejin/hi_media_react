import menus from '../data/menu-detail.json'

// menus 라는 이름으로 json 데이터 사용 예정

export function getMenuList(menuName) {

    if (menuName == null || menuName == '') return menus

    return menus.filter(menu => menu.menuName.includes(menuName))
}

export function getMenuInfo(menuCode) {

    // pathVariable로 넘어온 값은 문자열이기 때문에 정수 값이 필요하면 변환 필요

    return menus.filter(menu => menu.menuCode == menuCode)
}

export function getSearchList(menuName) {
    return menus.filter(menu => menu.menuName.match(menuName))
}
