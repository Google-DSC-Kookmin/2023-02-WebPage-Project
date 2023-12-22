import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const pages = ['Home', 'Activities', 'Member', 'Contact'];
const paths = ['/', '/activities', '/members', '/contact'];

function AppNavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(false);

    const navigate = useNavigate();
    const navigatePage = (index) => {
        navigate(paths[index]);
    };

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return; }
        setAnchorElNav(state);
    }

    return (
        <AppBar position="static" color={"inherit"} style={{marginBottom: "5vh"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* PC View */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigatePage(0)}
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src={"img/Logo_mini.png"} height={"50"} style={{marginTop: 10}}/>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={() => navigatePage(index)}
                                sx={{color: 'black'}}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile View */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigatePage(0)}
                        sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
                        <img src={"img/Logo_mini.png"} height={"50"} style={{marginTop: 10}}/>
                    </Typography>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={toggleDrawer(true)}
                            color="inherit">
                            <MenuIcon/>
                        </IconButton>
                        <Drawer
                            anchor='right'
                            open={anchorElNav}
                            onClose={toggleDrawer(false)}>
                            <Box
                                sx={{ width: 250 }}
                                role={"presentation"}
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}>
                                <Box sx={{textAlign: "center"}}>
                                    <img src={"img/Logo_mini.png"} height={"50"} style={{marginTop: 10}}/>
                                </Box>
                                <List>
                                    {pages.map((page, index) => (
                                        <ListItem key={page} onClick={() => navigatePage(index)}>
                                            <ListItemButton>
                                                <ListItemText primary={page}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppNavBar;
