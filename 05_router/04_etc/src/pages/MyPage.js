import { Navigate } from 'react-router-dom'

function MyPage() {

    /*
        useNavigate : 어디로 이동하기 위해서 url 변경
        Navigate : useNavigate랑 동일해 보이지만 함수로 작성할 것인지 컴포넌트로 작성할 것인지 선택 가능하다.       <- 분기 생성 가능
    */

    const isLogin = false

    // 권한에 따라 admin 마이페이지로 이동 시킬 수 있다.
    if (!isLogin) {
        return <Navigate to='/menu/' />
    }

    return (
        <div>
            <h1>마이페이지</h1>
        </div>
    )
}

export default MyPage;