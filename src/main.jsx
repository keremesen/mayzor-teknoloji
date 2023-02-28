import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import UserOperations from './components/UserOperations/UserOperations';
import UserProvider from './context/UserProvider';
import UserEdit from './components/UserEdit/UserEdit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/user-operations",
    element: <UserOperations />,
  },
  {
    path:"/user/:id/edit",
    element: <UserEdit />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
