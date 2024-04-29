import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Info from './components/Info';
import Footer from './components/Footer';
import Homepage from "./pages/HomePage";
import Response from "./pages/Response";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CreatePost from "./components/CreatePost";
import './App.css';

import { AppContext } from "./context/AppContext";
import { useSelector } from "react-redux";
import { createTheme,ThemeProvider } from '@mui/material';
import Sidebar from "./components/Sidebar";
import DisplayProfile from "./components/DisplayProfile";
import DisplayFavourites from "./components/DisplayFavourites";
import Discuss from "./pages/Discuss";
import EditProfile from "./components/EditProfile";
import DisplayDoubt from "./pages/DisplayDoubt";

const theme=createTheme({
  palette:{
    primary:{
      main:'rgb(31, 162, 103)',
  }
}
})
function App() {
  const user = useSelector((state) => state?.user);
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const [cloudName] = useState("dhdhpzhtq");

  return (
    <AppContext.Provider value={{ user, openPostDialog, setOpenPostDialog, cloudName }}>
      {user && <Sidebar />}
      <Routes>
        {!user && <Route path="/" element={<div className='landing'> <LandingPage /> <Info/> <Footer/> </div>} />}
        {user && <Route path="/" element={<Homepage />} />}

        <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/new/password" element={<ResetPassword />} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/create/file" element={user ? <CreatePost /> : <Navigate to="/login" />} />
        <Route path="/account" element={user ? <DisplayProfile /> : <Navigate to="/login" />} />
        <Route path="/starred" element={user ? <DisplayFavourites /> : <Navigate to="/login" />} />
        <Route path="/edit/profile" element={user ? <EditProfile /> : <Navigate to="/login" />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/doubt" element={<DisplayDoubt />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
