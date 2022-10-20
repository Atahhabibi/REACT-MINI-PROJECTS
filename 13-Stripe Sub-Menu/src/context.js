import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext=React.createContext();

const AppProvider=({children})=>{

    const[isSidebarOpen,setIsSidebarOpen]=useState(false);
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(false)
    const [location,setLocation]=useState({});
    const[page,setPage]=useState({page:'',links:[]})

    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }

    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }

    const closeSubmenu=()=>{
        setIsSubmenuOpen(false);
    }

    const openSubmenu=(text,cordinates)=>{
        const pag=sublinks.find((link)=>link.page===text);
        setPage(pag);
        setLocation(cordinates);
        setIsSubmenuOpen(true);

    }

    

    return <AppContext.Provider value={{isSubmenuOpen,isSidebarOpen,openSubmenu,closeSubmenu,openSidebar,closeSidebar,location,page}}>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}


export {AppProvider,useGlobalContext}
