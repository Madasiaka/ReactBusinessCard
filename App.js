import React from "react"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Socials from "./components/Socials"

export default function App (){
    return(
        <div>
            <About />
            <div className="sections">
                <Info />
                <Interests />
            </div>
            <Socials />
        </div>
    )
}