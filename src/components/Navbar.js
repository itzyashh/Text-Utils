import React, { useState } from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
  let sun = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  let moon = "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
const [first, setfirst] = useState(sun)

  const toggleD = () => {
    (first === sun)?setfirst(moon):setfirst(sun)
    props.toggleMode()
  }


  return (
    <div className={`${props.mode === ''?'dark':''}`}>
      
        <nav className="bg-blue-100  border-gray-200 px-2 py-2.5 dark:bg-gray-800">
          {/* <nav className={`bg-blue-100  border-gray-200 px-2 py-2.5 ${props.mode}:bg-purple-900`}> */}
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img src="https://cdn.iconscout.com/icon/free/png-256/notepad-2642816-2192663.png" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{props.title}</span>
            </a>
            <div className="flex md:order-2">
              <div className="hidden relative mr-3 md:mr-0 md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                </div>
              </div>
              <button className="px-5 py-1.5 bg-purple-700 text-white rounded-lg dark:bg-purple-500"
              onClick={toggleD}
              
          >
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={first}></path></svg> </button>

          
            </div>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {/* <li>
                <a href="/" className="block py-2 pr-4 pl-3 text-white text-lg bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hover:text-slate-500 " >Home</a>
              </li> */}
              <li>
                {/* <a href="/" className="text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">About</a> */}
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}
Navbar.defaultProps = {
  title: "Set title here"
}

export default Navbar