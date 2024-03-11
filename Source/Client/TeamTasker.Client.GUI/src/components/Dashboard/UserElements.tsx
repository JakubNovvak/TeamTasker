import { Avatar, Box, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Input } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';

export default function UserElements()
{
    return(
            <Box display="flex" flexDirection="row" sx={{width: "100%", height: "100%"}}>
                {/*Left Side of the Navbar*/}
                <Box display="flex" flexDirection="row" sx={{marginRight: "auto", alignItems: "center"}}>
                    <Typography variant="body1" color="#363b4d" fontWeight={550}>
                        <ArrowDropDownIcon sx={{color: "#363b4d", pt: "0.6rem"}}/>Placeholder 1
                    </Typography>

                    <Typography variant="body1" color="#363b4d" fontWeight={550} sx={{ml: "2rem"}}>
                        <ArrowDropDownIcon sx={{color: "#363b4d", pt: "0.6rem"}}/>Placeholder 2
                    </Typography>

                    <Typography variant="body1" color="#363b4d" fontWeight={550} sx={{ml: "2rem"}}>
                        <ArrowDropDownIcon sx={{color: "#363b4d", pt: "0.6rem"}}/>Placeholder 3
                    </Typography>
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