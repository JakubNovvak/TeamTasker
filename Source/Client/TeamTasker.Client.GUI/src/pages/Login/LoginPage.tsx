import { AccountCircle, Key } from "@mui/icons-material";
import { Input } from "@mui/joy";
import { Paper, Typography, styled, CircularProgress } from "@mui/material";
import Button from '@mui/material-next/Button';
import { Form, Formik, useFormikContext } from "formik";
import { NavLink, redirect } from "react-router-dom";
import { LoginDto } from "../../components/Types/LoginDto";
import FetchData from "../../components/Login/API/FetchData";
import { useState } from "react";
import CheckLoggedInPermission from "../../components/Connection/API/CheckLoggedInPermission";
import CheckAdminPermission from "../../components/Connection/API/CheckAdminPermission";

const ContentSeparator = styled("hr")({
    border: "0",
    clear: "both",
    display: "block",
    width: "96%",               
    //backgroundImage: "linear-gradient(to right, transparent 0%, #a8a5a5 40%, #a8a5a5 60%, transparent 100%)",
    backgroundColor: "lightgray",
    height: "1px"
});

function onSubmit(LoginDto: LoginDto, setSendingState: React.Dispatch<React.SetStateAction<boolean>>, setSendSucess: React.Dispatch<React.SetStateAction<number>>, sendSucess: number)
{    
    FetchData(LoginDto, setSendingState, setSendSucess);

    // if(sendSucess == 1)
    // {
    //     console.log("Success!");
    //     location.reload();// = "/projectspage";
    // }
}

function LoginPageContent({sendSucess}: {sendSucess: number})
{
    const formikProps = useFormikContext<LoginDto>();

    return(
            <Form>
                <Paper elevation={24} sx={{minWidth: "30rem", minHeight: "32rem", backgroundColor: "#ebf7ff", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography sx={{mt: "3rem", mb: "2rem", textShadow: '2px 1px 4px rgba(0, 0, 0, 0.4)'}} variant="h4" color="#727273">
                    <span style={{color: "#242c6b", fontWeight: "bold"}}>Team</span> Tasker
                </Typography>

                <ContentSeparator sx={{marginBottom: "4.5rem"}}/>

                <Input value={formikProps.values.email} onChange={formikProps.handleChange} id="email" defaultValue="" sx={{alignSelf: "flex-center", backgroundColor: "#cceaff", minWidth: "20rem",  maxWidth: "20rem", mb: "1.3rem"}}
                startDecorator={<AccountCircle />}
                placeholder="Account login"
                />

                <Input value={formikProps.values.password} onChange={formikProps.handleChange} id="password" defaultValue="" type="password" sx={{backgroundColor: "#cceaff", minWidth: "20rem",  maxWidth: "20rem"}}
                startDecorator={<Key />}
                placeholder="Account password"
                />

                {/* <NavLink to="/projectname/preview" style={{textDecoration: "none"}}> */}
                    {   
                        sendSucess == 2
                        ?
                        <CircularProgress sx={{mt: "3rem"}}/>
                        :
                        <Button type="submit" sx={{mt: "3rem", backgroundColor: "#004679", minWidth: "10rem", fontFamily: "Roboto, sans-serif"}} variant="filled">LOG IN</Button>
                    }
                {/* </NavLink> */}

                <Typography sx={{mt: "1rem", ml:"0.5rem"}} color="#242c" fontSize={15}>
                    {"<Password reset placeholder>"}
                </Typography>

            </Paper>
            <Typography color="lightgray" sx={{mt:"1rem", fontFamily: "Roboto, sans-serif"}}>
                Designed by <span style={{color: "#242c6b", fontWeight: "bold"}}>TeamTasker</span> ©
            </Typography>
        </Form>
    );
}

export default function LoginPage()
{
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);

    const [loggedInUserPermission, setloggedInUserPermission] = useState<boolean>(false);
    const [adminUserPermission, setAdminUserPermission] = useState<boolean>(false);

    CheckLoggedInPermission(setloggedInUserPermission);
    CheckAdminPermission(setAdminUserPermission);

    if(loggedInUserPermission && !adminUserPermission)
    {
        location.href = "/projectspage";
        return(<></>);
    }

    if(!loggedInUserPermission && adminUserPermission)
    {
        location.href = "/admindashboard";
        return(<></>);
    }

    return(
        <>
            <Formik initialValues={{email: "", password: ""}}
            onSubmit={(values) => {console.log(values), onSubmit(values, setSendingState, setSendSucess, sendSucess)}}
            >
                <LoginPageContent sendSucess={sendSucess}/>
            </Formik>
        </>
    );    
}