import './App.css';
import Blog from './pages/Blog/Blog';
import Donation from './pages/Donation/Donation';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/donation" element={<Donation></Donation>}></Route>
                <Route path="/events" element={<Events></Events>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/login" element={<Register></Register>}></Route>
                <Route path="/register" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
