import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import FeedPostCommentCard from "./FeedPostCommentCard";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import FeedPostAddComment from "./FeedPostAddComment";
import { AnimatePresence, motion } from "framer-motion";

export default function FeedPostCommentSection({commnetsNumber}: {commnetsNumber: number})
{
    const [dropDownIcon, setDropDownIcon] = useState<boolean>(false);
    const postComments = new Array(commnetsNumber);

    return(
        <Box mt={"2.5rem"}>
            <Box
            onClick={() => {setDropDownIcon(!dropDownIcon)}}
            sx={{cursor: "pointer"}}
            >
                <Grid container>
                    <Grid item xs={3} sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Typography variant="h5" sx={{mb: "0.5rem", minWidth: "10rem"}}>
                        Comments {"("+ postComments.length + ")"}
                        </Typography>
                        {dropDownIcon ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </Grid>
                </Grid>
            </Box>

            <Divider/>
            {dropDownIcon ? 
                <AnimatePresence>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    >
                        <FeedPostAddComment/>
                        
                        <FeedPostCommentCard />
                        <FeedPostCommentCard />
                        <FeedPostCommentCard />
                    </motion.div>
                </AnimatePresence>
            :
                <></>
            }
        </Box>
    );
}