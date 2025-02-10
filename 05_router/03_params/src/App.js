import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main'
import Menu from './pages/Menu'
import About from './pages/About'
import MenuDetail from './pages/MenuDetail'
import MenuSearchResult from './pages/MenuSearchResult';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='menu'>
              <Route index element={<Menu />}></Route>
              <Route path=':id' element={<MenuDetail />}></Route>
              <Route path='search' element={<MenuSearchResult />}></Route>
            </Route>
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
