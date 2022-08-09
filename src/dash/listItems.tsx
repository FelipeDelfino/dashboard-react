import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            
        </ListItemButton>

        <ListItemButton component={Link} to="/map">
            <ListItemIcon>
                <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
            
        </ListItemButton>

        <ListItemButton component={Link} to="/chart">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Charts" />
        </ListItemButton>

        <ListItemButton component={Link} to="/user">
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="User" />
        </ListItemButton>

    </React.Fragment>

);
