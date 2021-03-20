import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

 export const AppProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSidebar = ()=> {
        setIsSidebarOpen(true)
    }

    const closeSidebar = ()=> {
        setIsSidebarOpen(false)
    }

    const openSubmenu = ()=> {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu= ()=> {
        setIsSubmenuOpen(false)
    }
    return (
        <AppContext.Provider value = {{
            isSubmenuOpen,isSidebarOpen,openSidebar,closeSidebar,openSubmenu,closeSubmenu
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const userGlobalContext = () =>{
    return useContext(AppContext);
}