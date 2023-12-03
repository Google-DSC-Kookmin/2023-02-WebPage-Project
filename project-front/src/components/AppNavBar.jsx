import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import {useNavigate} from "react-router-dom";

function AppNavBar() {
    const navigate = useNavigate();
    const navigatePage = (path) => { navigate(path); };

    return (
        <AppBar position="static" color={"inherit"} style={{marginBottom: "5vh"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigatePage("/")}
                        sx={{ flexGrow: 1 }}>
                        <img src={"img/Logo_mini.png"} height={"50"} style={{marginTop: 10}}/>
                    </Typography>

                    <Box>
                        <Button
                            onClick={() => navigatePage("/activities")}
                            sx={{color: 'black'}}>
                            Activities
                        </Button>
                        <Button
                            onClick={() => navigatePage("/members")}
                            sx={{color: 'black'}}>
                            Member
                        </Button>
                        <Button
                            onClick={() => navigatePage("/contact")}
                            sx={{color: 'black'}}>
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppNavBar;
