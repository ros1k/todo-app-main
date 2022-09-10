import { createContext, useState, useContext, useEffect } from "react";
import LightBG from '../../../images/bg-desktop-light.jpg'
import DarkBG from '../../../images/bg-desktop-dark.jpg'

export const AppContext = createContext();
const themeDark = {
    backgroundColor: '#25273C',
    color: "#EBE1F6",
    image: DarkBG
}
const themeLight = {
    backgroundColor: '#FFFFFF',
    color: "black",
    image: LightBG
}


const AppProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")
    const [themeScheme, setThemeScheme] = useState(theme === "dark" ? themeDark : themeLight)



    const changeTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }

    useEffect(() => {

    })
    return (
        <AppContext.Provider value={{
            theme,
            themeScheme,
            changeTheme
        }}>
            {children}
        </AppContext.Provider>
    )

}
export default AppProvider;

