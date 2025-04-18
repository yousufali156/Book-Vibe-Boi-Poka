import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader:()=> fetch('booksData.json'),
                path:"/",
                Component: Home,
            }
        ],
    },
]);