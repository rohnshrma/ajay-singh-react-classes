import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
const Content = () => {
   const {theme} = useContext(ThemeContext)
    const styles = {
        backgroundColor : theme === "light" ? "#f5f5f5" : "#333",
        color : theme === "light" ? "#000" : "#fff",
        padding:"2rem",
        marginTop : "20px",
        borderRadius : "5px"
    }


  return (
    <div className='content' style={styles}>
      <p>This content changes with the theme</p>
      <p>Current theme : {theme}</p>
    </div>
  )
}

export default Content
