import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Menu from './pages/Main'
import About from './pages/Main'
import Layout from './layouts/Layout'
import Error404 from './pages/errors/Error404';
import MyPage from './pages/MyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='main' element={<Main />} />
            <Route path='menu'>
              <Route index element={<Menu />}></Route>
            </Route>
            <Route path='about' element={<About />} />
            <Route path='mypage' element={<MyPage />} />
          </Route>
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
