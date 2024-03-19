import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';
import AppsIcon from '@mui/icons-material/Apps';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { NavLink } from "react-router-dom";

import ModuleButton from "./ModuleButton";

export default function ModulesLinks({isOpen}: {isOpen: boolean}){
    return(
      <>  
        <List>
          <NavLink to="loginpage" style={{textDecoration: "none"}}><ModuleButton isOpen={isOpen} listKey={1} buttonText="asdsadsadsaasd"/></NavLink>
          <NavLink to="test" style={{textDecoration: "none"}}><ModuleButton isOpen={isOpen} listKey={1} buttonText="asdsadsadsaasd"/></NavLink>
          <NavLink to="preview" style={{textDecoration: "none"}}><ModuleButton isOpen={isOpen} listKey={1} buttonText="asdsadsadsaasd"/></NavLink>
        </List>
          <Divider sx={{backgroundColor: "white"}} />
          <List sx={{backgroundColor: "#363b4d"}}>
            <ModuleButton isOpen={isOpen} listKey={5} buttonText="Report a bug"/>
          </List>

      </>);
}