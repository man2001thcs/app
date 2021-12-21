import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../../icons/bell';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';
import {Typography } from '@mui/material';
import { Plus as PlusIcon } from '../../icons/plus';
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));
const item1 = 
  {
    href: '/customers',
    icon: (<PlusIcon fontSize="small" />),
    title: 'Số điểm',
    point: 180000
    
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

          <Tooltip title="Điểm">
          <Typography title="Search"
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
        sx={{ backgroundColor: 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: 'black',
            fontWeight: 'fontWeightBold',
            justifyContent: 'flex-start',
            border: 3,
            boxShadow: 2,
            padding: 0.5,
            pb: 0.2,
            mt: 0.8,
            mx: -1.8,
            borderColor: 'black',
            textAlign: 'left',
            textTransform: 'none',
            fontSize: 15, 
            }}      
      >
              {item1.point}
      </Typography>

      </Tooltip>
      <Tooltip title="AddPoint">
            <IconButton sx={{ ml: 1 }}>
              <PlusIcon fontSize="small" />
            </IconButton>
          </Tooltip>

      

          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>


          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
