import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
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
import NotFound from './pages/shared/NotFound/NotFound';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/donation" element={<Donation></Donation>}></Route>
                <Route
                    path="/events"
                    element={
                        <RequireAuth>
                            <Events></Events>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/addEvent"
                    element={
                        <RequireAuth>
                            <AddEvent></AddEvent>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/event/:eventId" element={<EventDetail></EventDetail>}></Route>
                <Route
                    path="/confirmationDetail/:eventId"
                    element={
                        <RequireAuth>
                            <ConfirmationDetail></ConfirmationDetail>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
