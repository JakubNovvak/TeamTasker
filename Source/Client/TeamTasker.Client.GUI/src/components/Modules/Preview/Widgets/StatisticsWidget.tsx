import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { BarChart, BarSeriesType, PieChart } from "@mui/x-charts";
import { MakeOptional } from "@mui/x-date-pickers/internals";
import { useEffect, useState } from "react";

function LoadingChart()
{
    return(
        <>
            <Box sx={{width: "100%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress size={70} sx={{color: "#363b4d"}}/>
            </Box>
        </>
    );
}

export default function StatisticsWidget()
{
    const [issuesByUser, setIssuesByUser] = useState<MakeOptional<BarSeriesType, "type">[]>([{data: [11], stack: '1', label: 'Leader User'}]);
    //var issuesByUser:  MakeOptional<BarSeriesType, "type">[] = [{data: [10], stack: '1', label: 'Leader User'}, {data: [3], stack: '2', label: 'Test Testowy'}];
    
    useEffect(() => {
        console.log("test");
        var temp = [{data: [1], stack: '1', label: 'Leader User'}, {data: [3], stack: '2', label: 'Test Testowy'}];
        setIssuesByUser(temp);
        
    }, []);

    return(
        <>
            <Grid item xs={4}>
                <Paper elevation={3} sx={{display: "flex", flexDirection:"column", background: "white", height: "100%", minHeight: "26rem"}}>
                    <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem", mb: "1rem"}}>
                        Issues Quantity
                    </Typography>
                    {/* <LoadingChart/> */}
                    <BarChart
                    series={[
                        { data: [10], stack: 'A', label: 'New Issues' },
                        { data: [15], stack: 'B', label: 'In Progress' },
                        { data: [10], stack: 'C', label: 'On Hold' },
                        { data: [8], stack: 'D', label: 'Issues Done' }
                    ]}
                    width={550}
                    height={350}
                    colors={["#1098AD", "#255ED9", "#C930B2", "#58E82C"]}
                    xAxis={[{scaleType: 'band', data: [""]}]}
                    borderRadius={4}
                    />
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper elevation={3} sx={{display: "flex", flexDirection:"column", background: "white", height: "100%", minHeight: "26rem"}}>
                    <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem", mb: "1rem"}}>
                        Issues Done Overall
                    </Typography>
                    {/* <LoadingChart/> */}
                    <PieChart
                    series={[
                        {
                        data: [
                            { id: 0, value: 10, label: 'Done' },
                            { id: 1, value: 15, label: 'Remaining' }
                        ],
                        },
                    ]}
                    width={500}
                    height={280}
                    colors={["#58E82C", "#1098AD"]}
                    />
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper elevation={3} sx={{display: "flex", flexDirection:"column", background: "white", height: "100%", minHeight: "26rem"}}>
                    <Typography variant="h6" fontWeight={550} sx={{marginRight: "auto", ml: "1.5rem", mt: "1rem", mb: "1rem"}}>
                        Issues Done by User
                    </Typography>
                    {/* <LoadingChart/> */}
                    <BarChart
                    series={issuesByUser}
                    width={550}
                    height={350}
                    // colors={["#1098AD", "#255ED9", "#C930B2", "#58E82C"]}
                    xAxis={[{scaleType: 'band', data: [""]}]}                    
                    borderRadius={4}
                    slotProps={{
                        legend: {hidden: true}
                    }}
                    />
                </Paper>
            </Grid>
        </>
    );
}