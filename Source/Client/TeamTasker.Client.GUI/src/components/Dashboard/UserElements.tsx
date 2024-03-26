import { Avatar, Box, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Input } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';


function renderSwitch(pathnName: string): string[]
{

    //TODO: Implement better solution ASAP - this is only a temporary solution

    switch(pathnName)
    {
        case "/projectname/test":
            return ["", "", ""];

        case "/projectname/preview":
            return ["Components", "Add", "Remove"];

        case "/projectname/issueslist":
            return ["Your Issues", "", ""];

        case "/projectname/notifications":
            return ["Mentions", "Shared", ""];

        case "/projectname/projectfeed":
            return ["Publish", "", ""];

        case "/projectname/projectsettings":
            return ["", "", ""];

        case "/projectname/usersettings":
            return ["", "", ""];

        case "/projectname/board":
            return ["Switch Board", "", ""];

        case "/projectname/projectmembers":
            return ["Manage Users", "Manage Roles", ""];
            
        default:
            return ["", "", ""];
    }
}

export default function UserElements()
{

    let pathName = location.pathname;

    return(
            <Box display="flex" flexDirection="row" sx={{width: "100%", height: "100%"}}>
                {/*Left Side of the Navbar*/}
                <Box display="flex" flexDirection="row" sx={{marginRight: "auto", alignItems: "center"}}>
                    <Typography variant="body1" color="#363b4d" fontWeight={550}>
                    {renderSwitch(pathName)[0] == "" ? <></> : <ArrowDropDownIcon sx={{color: "#363b4d", pt: "0.6rem"}}/>}{renderSwitch(pathName)[0]}
                    </Typography>

                    <Typography variant="body1" color="#363b4d" fontWeight={550} sx={{ml: "2rem"}}>
                        {renderSwitch(pathName)[1] == "" ? <></> : <ArrowDropDownIcon sx={{color: "#363b4d", pt: "0.6rem"}}/>}{renderSwitch(pathName)[1]}
                    </Typography>

                    <Typography variant="body1" color="#363b4d" fontWeight={550} sx={{ml: "2rem"}}>
                    {renderSwitch(pathName)[2] == "" ? <></> : <ArrowDropDownIcon sx={{color: "#363b4d", pt: "0.6rem"}}/>}{renderSwitch(pathName)[2]}
                    </Typography>

                    {/* <Button size="small" variant="contained" sx={{backgroundColor: "#363b4d", ml: "1.5rem"}}>Create</Button> */}
                </Box>
                
                {/*Right Side of the Navbar*/}
                <Box display="flex" flexDirection="row" sx={{marginLeft: "auto", alignItems: "center"}}>
                    <Input 
                    startDecorator={<SearchIcon/>}
                    placeholder="Search for..."
                    sx={{mr: "1.5rem"}}
                    />
                    <Badge badgeContent={4} color="primary" sx={{mr: "1.5rem"}}>
                        <NotificationsIcon fontSize="medium" sx={{color: "#363b4d"}} />
                    </Badge>
                    <ArrowDropDownIcon sx={{color: "#363b4d"}}/>
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" />
                </Box>
            </Box>
    );
}