import { Box, Drawer } from "@mui/material";
import MuiMiniDrawer from "../../components/Dashboard/MuiMiniDrawer";
import PreviewDrawerContent from "../../components/Dashboard/PreviewDrawerContent";
import { NavLink, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function renderSwitch(pathnName: string)
{
    switch(pathnName)
    {
        case "/projectname/loginpage":
            return <PreviewDrawerContent/>;

        case "/projectname/preview":
                return <h1>preview</h1>;
            
        default:
            return <h1>404</h1>;
    }
}

export default function ModulesContainer()
{
    let pathName = location.pathname;

    console.log(pathName);
    return(
        <Box sx={{ display: 'flex', width: "90vw", ml: "-15rem"}}>
            
            <MuiMiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 0}}>
                
                {renderSwitch(pathName)}

            </Box>
        </Box>
    );

    return(
        <>
            <MuiMiniDrawer />
        </>
    );
}