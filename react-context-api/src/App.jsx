import ThemeToggle from './components/ThemeToggle'
import { useContext } from 'react'
import './App.css'
import Content from './components/Content'
import "bootstrap/dist/css/bootstrap.min.css"
import ThemeContext, { ThemeProvider } from './context/ThemeContext'



function App() {
const {theme} = useContext(ThemeContext)

   const styles = {
        backgroundColor : theme === "light" ? "#f5f5f5" : "#333",
        color : theme === "light" ? "#000" : "#fff",
        padding:"2rem",
        marginTop : "20px",
        borderRadius : "5px"
    }
return (
  
<div className='app ' style={styles}>
  <h1>React Context API</h1>
  <ThemeToggle/>
  <Content/>
</div> 


)
}
export default App
