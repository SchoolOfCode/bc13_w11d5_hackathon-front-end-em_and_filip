import {createContext, useState} from "react";

const DarkModeContext = createContext();

function DarkModeProvider({children}) {
 const [darkMode, setDarkMode] = useState(false)
 function toggle() {
    setDarkMode(!darkMode)
}
return <div>
    <DarkModeContext.Provider value={{darkMode, toggle}}>
    {children}
    </DarkModeContext.Provider>
 </div>
}

export { DarkModeContext, DarkModeProvider }