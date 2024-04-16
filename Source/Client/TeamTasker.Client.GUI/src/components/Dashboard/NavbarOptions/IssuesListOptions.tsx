import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Typography } from '@mui/material';
import { useState } from 'react';

export default function IssuesListOptions() 
{
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    sessionStorage.setItem('issuesOption', option);
    window.dispatchEvent(new Event('storage'));
    setAnchorEl(null);
  };

  return (
    <>
       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{textTransform: "none"}}
      >
        <Typography fontWeight={500} sx={{display: "flex", flexDirection: "row", alignItems: "center"}} color={{color: "#363b4d"}}>
            <ArrowDropDownIcon sx={{color: "#363b4d"}}/> {"Select Issues"}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('user')}>Your Issues</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('project')}>Project Issues</MenuItem>
      </Menu>
    </>
  );
}