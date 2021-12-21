import { useEffect, setStyle } from 'react';
import React, {useState} from "react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../../icons/chart-bar';
import { Cog as CogIcon } from '../../icons/cog';
import { Lock as LockIcon } from '../../icons/lock';
import { Selector as SelectorIcon } from '../../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
import { User as UserIcon } from '../../icons/user';
import { UserAdd as UserAddIcon } from '../../icons/user-add';
import { Users as UsersIcon } from '../../icons/users';
import { XCircle as XCircleIcon } from '../../icons/x-circle';
import { Logo } from '../logo';
import { NavItem } from '../nav-item';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';



const items1 = [
  {
    href: '/member/blog',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Blog'
  },
  {
    href: '/member/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Danh sách khách hàng',
    
  }
];

const items3 = [
  {
    href: '/member/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Sản phẩm'
  }
  
];

const items4 = [
  {
    href: '/member',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Shop',
    
  }
];

const items5 = [
  {
    href: '/member',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Tổng quan',
    
  }
];

const items2 = [
   
  {
    href: '/member/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Thông tin tài khoản'
  },
  {
    href: '/member/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Cài đặt'
  },
 
];

export const DashboardSidebar = (props) => {
  const [style, setStyle] = useState({display: 'none'});
  const { open, onClose } = props;
  
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Acme Inc
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Rank
                  {' '}
                  : Premium
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items1.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
            
          ))}

          <Box sx={{ flexGrow: 1 }}
          >
            <MenuList sx={{ flexGrow: 1,backgroundColor: 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: 'neutral.300',
            fontWeight: 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 4.5,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            } 
            }}>
             Shop
             <MenuItem>
             {items5.map((item) => (
           
           <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
              </MenuItem>
              <MenuItem>
             {items3.map((item) => (
           
           <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
              </MenuItem>

           
            </MenuList>
            
           </Box>


          {items2.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        
      
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
