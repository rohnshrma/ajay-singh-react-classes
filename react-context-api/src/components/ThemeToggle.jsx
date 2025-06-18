import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext';

const ThemeToggle = () => {
    
    const {theme ,toggleTheme} = useContext(ThemeContext)

  return (
    <button className={`btn btn-${theme === "light" ? "dark" : "light" }`}  onClick={toggleTheme} >
        Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  )
}

export default ThemeToggle
