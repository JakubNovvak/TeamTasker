import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';
import AppsIcon from '@mui/icons-material/Apps';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CoPresentIcon from '@mui/icons-material/CoPresent';

function ChoosePredefinedIcon(listKey: number)
{
    //TODO: Implement better solution

    if(listKey == 0)
        return <AppsIcon/>;

    if(listKey == 1)
        return <AutoGraphIcon/>;

    if(listKey == 2)
        return <CalendarMonthIcon/>;

    if(listKey == 4)
        return <CoPresentIcon/>;

    if(listKey == 5)
        return <BugReportIcon/>;
}

export default function ModuleButton({isOpen, listKey, buttonText}: {isOpen: boolean, listKey: number, buttonText: string}){
    return(
        <ListItem key={listKey} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            sx={{
                minHeight: 48,
                justifyContent: isOpen ? 'initial' : 'center',
                px: 2.5,
            }}
            >
            <ListItemIcon
                sx={{
                minWidth: 0,
                mr: isOpen ? 3 : 'auto',
                justifyContent: 'center',
                color: "white"
                }}
            >
                {ChoosePredefinedIcon(listKey)}

            </ListItemIcon>
            <ListItemText primary={buttonText} sx={{ opacity: isOpen ? 1 : 0, color: "white"}} />
            </ListItemButton>
        </ListItem>
    );
}