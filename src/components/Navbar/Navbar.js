import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    link:{
        textDecoration: 'none',
        boxShadow: 'none',
        color: 'white',
    },
    

}));


function NavBar() {
    let userId = 5;
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar enableColorOnDark sx={{backgroundColor: '#030303'}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , textAlign: 'left'}}>
            <Link className={classes.link} to='/'>Home</Link>
            </Typography>
            <Button color="inherit"><Link className={classes.link} to={{pathname: '/users/'+userId}}>User</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
        
    )
}

export default NavBar;