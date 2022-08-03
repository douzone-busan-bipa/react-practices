import React from 'react';
import {useRoutes} from 'react-router';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Join from "./component/user/Join";
import Login from "./component/user/Login";
import Settings from "./component/user/Settings";
import About from "./component/about";
import Me from "./component/about/Me";
import Location from "./component/about/Location";

import Error404 from "./component/error/Error404";

import './assets/scss/App.scss'

export default function App() {
    return useRoutes([
        {path:'/', element: <Main /> },
        {path:'gallery', element: <Gallery /> },
        {path:'guestbook', element: <Guestbook /> },
        {path:'user/join', element: <Join /> },
        {path:'user/login', element: <Login /> },
        {path:'user/settings', element: <Settings /> },
        {
            element: <About />,
            children: [
                {path: 'about/me', element: <Me />},
                {path: 'about/location', element: <Location />}
            ]
        },
        {path:'*', element: <Error404 /> }
    ]);
}