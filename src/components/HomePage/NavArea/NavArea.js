import { Avatar, Box, Button, Container, IconButton, Menu, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { LogoImg, MenuLink, MenuStack, ResponsiveLink } from '../../Styles/AllStyles';
import logo from '../../../logos/logo.png';
import { MenuOpen } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavArea = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Container maxWidth='lg'>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <LogoImg src={logo} alt="Logo" />
                <Box display={{ md: 'block', lg: 'block', xs: 'none', sm: 'none' }}>
                    <MenuStack direction='row' spacing={2}>
                        <MenuLink variant="p" component="a" href="/" >Home</MenuLink>
                        <MenuLink variant="p" component="p">Donations</MenuLink>
                        <MenuLink variant="p" component="p">Events</MenuLink>
                        <MenuLink variant="p" component="p">Blog</MenuLink>
                        <Link to="/register/1"><Button variant="contained">Register</Button></Link>
                        <Button variant="contained" color="secondary">Admin</Button>
                    </MenuStack>
                </Box>
                <Box display={{ md: 'none', lg: 'none', xs: 'block', sm: 'block' }}>
                    <Tooltip title="Open Menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <MenuOpen />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <ResponsiveLink variant="p" component="p">Home</ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">Donations</ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">Events</ResponsiveLink>
                        <ResponsiveLink variant="p" component="p">Blog</ResponsiveLink>
                        <Button>Register</Button>
                        <br />
                        <Button>Admin</Button>
                    </Menu>
                </Box>

            </Stack>
        </Container>
    );
};

export default NavArea;