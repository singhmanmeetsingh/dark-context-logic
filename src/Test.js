import React,{useContext} from 'react'
import {ThemeContext} from "./ThemeContext"
function Test() {
    const {themes , toggleFunction ,toggle} = useContext(ThemeContext)
    console.log("theme",themes)
    return (
        <div>
            <button 
            onClick={toggleFunction}
            style={{ background: toggle ? themes.dark.background :themes.light.background, color: toggle ? themes.dark.foreground : themes.light.foreground }}>
            I am styled by theme context!
            </button>
        </div>
    )
}

export default Test
