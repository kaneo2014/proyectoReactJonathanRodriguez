import React,{useContext} from 'react'
import ThemeContext from "../../context/ThemeContext/ThemeContext"

const ChildComponent = () => {
    const{isDarkMode,toggleTheme}=useContext(ThemeContext)
  return (
    <div style={{background:isDarkMode? "black":"white",color:isDarkMode?"white":"black",}}>
        <button onDoubleClick={toggleTheme}> Toggle Dark Mode </button>

    </div>
  )
}
export default ChildComponent