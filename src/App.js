import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './pages/Blog/Blog';
import ConfirmationDetail from './pages/ConfirmationDetail/ConfirmationDetail';
import Donation from './pages/Donation/Donation';
import EventDetail from './pages/EventDetail/EventDetail';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Header from './pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import AddEvent from './pages/AddEvent/AddEvent';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/donation" element={<Donation></Donation>}></Route>
                <Route path="/events" element={<Events></Events>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/addEvent" element={<AddEvent></AddEvent>}></Route>
                <Route path="/event/:eventId" element={<EventDetail></EventDetail>}></Route>
                <Route
                    path="/confirmationDetail/:eventId"
                    element={
                        <RequireAuth>
                            <ConfirmationDetail></ConfirmationDetail>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
