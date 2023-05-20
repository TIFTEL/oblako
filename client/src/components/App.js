import './app.scss'
import {BrowserRouter, Route, Routes, createBrowserRouter,
    RouterProvider,} from "react-router-dom";
import Registration from "./registration/Registration";
import Mainpage  from './mainpage/Mainpage';
import Login from "./autorization/Login";
import {useSelector} from "react-redux";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainpage />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

function App() {
    return (
        <div className='app'>
            <div className='wrap'>
            <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;