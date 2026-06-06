import React from 'react'
import { Link } from 'react-router-dom'
// ham navbar me link ka use karenge taki hum apne app ke different pages ke beech navigate kar sakein without refreshing the page. Link component react-router-dom se aata hai aur ye ek anchor tag ki tarah kaam karta hai lekin ye client side routing provide karta hai, jisse page refresh nahi hota aur user experience better hota hai.
// agar page refresh hota to user ke liye thoda sa time lagta kyuki browser ko server se naya page fetch karna padta, lekin Link component ke use se hum bina page refresh ke hi different pages ke beech navigate kar sakte hai, jisse app zyada fast aur responsive lagta hai.
const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
            <h1>Workout Buddy</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar