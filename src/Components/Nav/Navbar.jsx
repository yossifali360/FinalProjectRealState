import React, { useState , useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineLightMode , MdDarkMode } from 'react-icons/md';
import { BsBagHeart } from "react-icons/Bs";
import "./Nav.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../rtc/slices/authSlice';
import { Favcart } from '../FavCart/Favcart';
export const Navbar = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userDropDown, setuserDropDown] = useState(false);



  
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const userDrop = () => {
    setuserDropDown(!userDropDown);
  };

  const dispatch = useDispatch();

  // Dark And Ligh Mode
  const [theme, settheme] = useState("light")

  useEffect(()=>{
    if (theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  })
  const SessionData = JSON.parse(localStorage.getItem('Session'));
  const handleMode = () => {
    settheme(theme === "dark" ? "light" : "dark")
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  return (
<div className="z-50 sticky top-0">
  <Favcart isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
  <nav className="bg-white border-gray-200 dark:bg-zinc-950">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center">
      <img src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaAPTv_HqWt1CyNfRw2pEc3zaOZZZOarMb72r20bdRizIXaUmZTJJqmUFAnTYtO3pXCf9tRl5iQ8xMjNpoETSIa6_sIsGg=w1920-h923" className="h-11 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Elite <span className='text-emerald-500	'>Estates</span></span>
  </a>
  <div className="flex items-center md:order-2 relative">
      <BsBagHeart className="text-2xl mx-5" onClick={toggleDrawer} />
      <button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={userDropDown} onClick={userDrop} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="user photo"/>
      </button>
        <button className={` mx-5 ${theme =="dark" ? "text-white" : "text-black"} `} onClick={handleMode}>{theme =="dark" ? <MdDarkMode /> : <MdOutlineLightMode />}</button>
      {isAuth ? <div  className={`z-50 absolute top-8 right-0 ${userDropDown ? '' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">{SessionData.userData.name}</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{SessionData.userData.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            {SessionData.userData.Role == "Admin" ? <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</button> : null}
          </li>
          <li>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</button>
          </li>
          <li>
            {SessionData.userData.Role == "User" ? <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Auction History</button> : null}
          </li>
          <li>
            <button onClick={()=>dispatch(logout())} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</button>
          </li>
        </ul>
      </div> : <div  className={`z-50 absolute top-8 right-0 ${userDropDown ? '' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="user-dropdown">
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link to={"/Login"} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</Link>
          </li>
          <li>
            <NavLink to={"/Register"} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Register</NavLink>
          </li>
        </ul>
      </div>}
      <button data-collapse-toggle="navbar-user" onClick={toggleCollapse} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded={isCollapsed ? 'true' : 'false'}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isCollapsed ? 'block' : 'hidden'}`} id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-zinc-950 dark:border-gray-700">
      <li>
        <link rel="stylesheet" href="" />
        <NavLink to={"/"} className="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md::text-emerald-500 md:p-0 md:dark:text-white" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to={"/About"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500	 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
      </li>
      <li>
        <NavLink to={"/Posts"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500	 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Posts</NavLink>
      </li>
      <li>
        <NavLink to={"/Auctions"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500	 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Auctions</NavLink>
      </li>
      <li>
        <NavLink to={"/Contact"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500	 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
)}
