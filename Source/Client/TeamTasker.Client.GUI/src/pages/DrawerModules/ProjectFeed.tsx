import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import FeedPostCard from "../../components/Modules/ProjectFeed/FeedPostCard";
import { useEffect, useState } from "react";
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { ReadIssueDto } from "../../components/Types/ReadIssuesDto";
import { GetProjectFeedPosts } from "../../components/Modules/API/Feed/GetProjectFeedPosts";
import dayjs from "dayjs";
import { ReadEmployeeDto } from "../../components/Types/ReadEmployeeDto";
import { GetProjectEmployees } from "../../components/Modules/API/GetProjectEmployees";

export default function ProjectFeed({projectId}: {projectId: string})
{
    const [sendingState, setSendingState] = useState<boolean>(false);
    const [sendSucess, setSendSucess] = useState<number>(0);

    //TODO: Temp solution - change to something better
    const [feedPosts, setFeedPosts] = useState<ReadIssueDto[]>([]);

    const [selectedOption, setSelectedOption] = useState<string>(() => {
        const storedOption = sessionStorage.getItem('issuesChange');
        return storedOption ? storedOption : "null";
      });

      
      const [tempProjectEmployees, tempSetProjectEmployees] = useState<ReadEmployeeDto[]>([]);
    useEffect(() => {
        GetProjectFeedPosts(setSendingState, setSendSucess, setFeedPosts, projectId);
        GetProjectEmployees(projectId, tempSetProjectEmployees);

        const handleStorageChange = () => {
            const storedOption = sessionStorage.getItem('feedChange');
            if (storedOption && storedOption !== selectedOption) {
              setSelectedOption(storedOption);
            }
          };
          console.log("Changed onSession storage change: " + selectedOption);
          window.addEventListener('feedChange', handleStorageChange);
    
          return () => {
              window.removeEventListener('feedChange', handleStorageChange);
              //sessionStorage.removeItem('issuesChange');
          };

    }, [selectedOption]);

    return(
        <>
            <Box sx={{width: "100%", height: "94vh", mt: "5rem", marginLeft: "6rem"}}>
                <Box sx={{display: "flex", mb: "0rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Project Feed
                    </Typography>
                </Box>

                {sendingState 
                ?
                    <CircularProgress />
                :
                    <Grid container>
                    {feedPosts.length == 0 
                    ?
                    <Typography variant="h6" sx={{mt: "3rem", display: "flex", alignItems: "center"}}>
                        <ContentPasteSearchIcon sx={{mr: "01rem"}}/>There are no posts to show...
                        </Typography>
                    :
                        // <>
                        //     {feedPosts.map(post =>(
                        //         <FeedPostCard feedPost={post} projectId={projectId} />
                        //     ))}
                        // </>
                        <>
                            { feedPosts.sort((a, b) => {
                                //TODO: Change on a server to dates
                                const dateA = a.id;
                                const dateB = b.id;
                                return dateB - dateA;
                            }).map( post =>(
                                <FeedPostCard feedPost={post} projectId={projectId} tempProjectEmployees={tempProjectEmployees} />
                            ))
                            }
                        </>
                    }
                    </Grid>
                }
            </Box>
        </>
    );
}