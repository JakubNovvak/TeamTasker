import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Avatar, TableHead, Typography, CircularProgress } from '@mui/material';
import { GetProjectIssues } from '../API/GetProjectIssues';
import { ReadIssueDto } from '../../Types/ReadIssuesDto';
import { ReadEmployeeDto } from '../../Types/ReadEmployeeDto';
import { GetProjectEmployees } from '../API/GetProjectEmployees';
import TempGetCurrentUser from '../../Connection/API/TempGetCurretnUser';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(id: number, topic: string, status: string, assignedTo: string, priority: string) {
  return { id, topic, status, assignedTo, priority };
}

const rows = [
  createData(1, 'Create database model', "🟩 Done", "", "🔵 Normal"),
  createData(2, 'Add entities based on database model', "🟩 Done", "", "🔵 Normal"),
  createData(3, 'Create the most importnant Dtos', "🟩 Done", "", "🔵 Normal"),
  createData(4, 'Create class AppDbContext', "🟩 Done", "", "🔵 Normal"),
  createData(5, 'Implement Repositories', "🟩 Done", "", "🔵 Normal"),
  createData(6, 'Add repositories to the dependency injection container in Program.cs', "🟩 Done", "", "🔵 Normal"),
  createData(7, 'Add AutoMapper profiles to allow using dtos in services', "🟩 Done", "", "🔵 Normal"),
  createData(8, 'Create additional initial views', "🟩 Done", "", "🔵 Normal"),
  createData(9, 'Chair the presentation this wednesday', "🟦 In progress", "", "🔴 Urgent")
];

const statusString: {[key: string]: string} = {
  "NewIssue": "⬜ New Issue",
  "InProgress": "🟦 In Progress",
  "OnHold": "🟪 On Hold",
  "IssueDone": "🟩 Issue Done",
  default: "⬛ Can't load status"
}

const priorityString: {[key: string]: string} = {
  "High": "🔴 High",
  "Medium": "🔵 Normal",
  "Low": "🟢 Low",
  default: "⚫ Error"
}

export default function PreviewIssuesTable({projectId, reloadCondition}: {projectId: string, reloadCondition: boolean}) 
{
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const [sendingState, setSendingState] = useState<boolean>(false);
  const [sendSucess, setSendSucess] = useState<number>(0);
  const [projectIssues, setProjectIssues] = useState<ReadIssueDto[]>([]);
  const [projectEmployees, setProjectEmployees] = useState<ReadEmployeeDto[]>([]);

  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>(() => {
    const storedOption = sessionStorage.getItem('issuesOption');
    return storedOption ? storedOption : 'project';
  });


  useEffect(() => {
      GetProjectIssues(projectId, setProjectIssues, setSendingState, setSendSucess);
      GetProjectEmployees(projectId, setProjectEmployees);
      TempGetCurrentUser(setCurrentUserEmail);

      const handleStorageChange = () => {
        const storedOption = sessionStorage.getItem('issuesOption');
        if (storedOption && storedOption !== selectedOption) {
          setSelectedOption(storedOption);
        }
      };
      console.log("Changed on Session storage change: " + selectedOption);
      window.addEventListener('storage', handleStorageChange);

      return () => {
          window.removeEventListener('storage', handleStorageChange);
      };
      
  }, [reloadCondition, selectedOption]);

  if(sendingState)
    return(<CircularProgress size="5rem" sx={{mt: "13rem"}}/>);

  if(projectEmployees.length == 0)
    return(<></>);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - projectIssues.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer elevation={0} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Topic</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Assigned to</TableCell>
            <TableCell align="right">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? projectIssues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : projectIssues
          ).map((issue) => (
            // TODO: Implement proper validation, of issues to display
            (selectedOption === "project" 
            ? true 
            : (issue.employeeId == projectEmployees.find(employee => employee.email == currentUserEmail)?.id ? true : false))

            ?

            <TableRow key={issue.id}>
            <TableCell component="th" scope="row">
              {issue.id}
            </TableCell>
            <TableCell component="th" scope="row">
              {issue.name}
            </TableCell>
            <TableCell style={{ width: 160 }} align="left">
              {statusString[issue.status]}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              <Box display={'flex'} flexDirection={'row'}>
                  <Avatar alt="?" src={projectEmployees.find(employee => employee.id == issue.employeeId)?.avatar} sx={{width: "2rem", height: "2rem"}}/> 
                  <Typography sx={{alignSelf: "center", ml: "1rem"}}>
                      {
                      projectEmployees.find(employee => employee.id == issue.employeeId)?.firstName
                      + " " +
                      projectEmployees.find(employee => employee.id == issue.employeeId)?.lastName
                      }
                  </Typography>
              </Box>
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              {priorityString[issue.priority]}
            </TableCell>
          </TableRow>

          :

          <></>
            
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}