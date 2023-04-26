import React from "react"
import { BrowserRouter as Router, useRoutes, BrowserRouter } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import DrinkMenu from "./components/DrinkMenu"
import FoodMenu from "./components/FoodMenu"
import GiftCard from "./components/GiftCard"
import Takeout from "./components/Takeout"
import Contact from "./components/Contact"
import Homepage from "./components/Homepage"


const AllRoutes = () => { 
  const routes = useRoutes([
    { path:"/contact/*", element:<Contact /> },
    { path:"/drinkmenu/*", element:<DrinkMenu /> },
    { path:"/foodmenu/*", element:<FoodMenu /> },
    { path:"/giftcard/*", element:<GiftCard /> },
    { path:"/takeout/*", element:<Takeout />},
    { path:"/", element:<Homepage />}
  ])
  return routes

}

const AppWrapper = () => {
  return (
    <Router history={BrowserRouter}>
        <Header />
            <AllRoutes />
        <Footer />
    </Router>
  )
}

export default AppWrapper