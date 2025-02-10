import About from "./pages/About";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import WeatherApp from "./WeatherApp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route index element={<Main />} /> */}
                    <Route path="/" element={<Main />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;