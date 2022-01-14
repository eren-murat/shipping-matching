import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        }
    }

})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        { 
            text: 'Home', 
            icon: <HomeOutlinedIcon color="primary" />, 
            path: '/' 
        },
        { 
          text: 'Trucks', 
          icon: <LocalShippingOutlinedIcon color="primary" />, 
          path: '/trucks' 
        },
        { 
            text: 'Add Truck', 
            icon: <AddBoxOutlinedIcon color="primary" />, 
            path: '/addtruck' 
          },
        { 
          text: 'Goods', 
          icon: <Inventory2OutlinedIcon color="primary" />, 
          path: '/goods' 
        },
        { 
            text: 'Add Goods', 
            icon: <AddBoxOutlinedIcon color="primary" />, 
            path: '/addgoods' 
          },
      ];

    return (
        <div className={classes.root}>
            {/* app bar */}
      
            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
            >
                <div>
                <Typography variant="h5" className={classes.title}>
                    Shipping Matching
                </Typography>
                </div>

                {/* links/list section */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem 
                            button 
                            key={item.text} 
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
        
            </Drawer>

            {/* main content */}
            <div className={classes.page}>
                { children }
            </div>
    </div>
  )
}