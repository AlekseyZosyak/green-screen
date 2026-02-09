import { BrowserRouter, Route, Routes } from 'react-router';
import TestPage from '../pages/TestPage';
import AboutPage from '../pages/AboutPage';
import Nav from "../nav/nav";

const Conecter = ({onToggleFullscreen}) => {
    return (
        <>  
            <BrowserRouter>
                <Nav/>
                    <Routes>
                        <Route path='/' element={<TestPage onToggleFullscreen={onToggleFullscreen} />}></Route>
                        <Route path='/about' element={<AboutPage/>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default Conecter;