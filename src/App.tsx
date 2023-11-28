import './App.css'
import Register from "./presentation/Register/Register.tsx";
import Welcome from "./presentation/Welcome/Welcome.tsx";
import Success from "./presentation/Success/Success.tsx";
import Chat from "./presentation/Chat/Chat.tsx";
import Notification from "./presentation/Notification/Notification.tsx";
import Home from "./presentation/Home/Home.tsx";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Links</h1>
        <Link to="welcome">Welcome</Link>
        <Link to="chat">Chat</Link>
        <Link to="notification">Notification</Link>
        <Link to="register">Register</Link>
        <Link to="success">Success</Link>
        <Link to="home">Home</Link>
      </div>
    ),
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "success",
    element: <Success />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
