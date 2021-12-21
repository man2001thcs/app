import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../../icons/bell';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';
import {Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Plus as PlusIcon } from '../../icons/plus';
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));
const item1 = 
  {
    href: '/login',
    icon: (<PlusIcon fontSize="small" />),
    title: 'Đăng nhập',
    Label: 'Đăng nhập'
    
  };
;
const item2 = 
  {
    href: '/register',
    icon: (<PlusIcon fontSize="small" />),
    title: 'Đăng kí',
    Label: 'Đăng kí'
    
  };
;
export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>


          <Box sx={{ flexGrow: 1 }} />


          <Button title="Login"
          href = {item1.href}
        align="center"
        color="primary"
        variant="contained"  
        sx={{ 
          mr: 2
            }}      
      >
              {item1.Label}    
                       
      </Button>

      <Button title="Register"
      href = {item2.href}
      align="center"
      color="primary"
      variant="contained"    
      sx={{ 
        pl: 3.5,
        pr: 3.5
          }}       
      >    
              {item2.Label}          
      </Button>

      

 
      
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
