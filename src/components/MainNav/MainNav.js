import * as React  from 'react';
import { useEffect } from "react";
import {makeStyles} from "@material-ui/core/styles"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import TheatersIcon from '@mui/icons-material/Theaters';
import MovieIcon from '@mui/icons-material/Movie';
import {Navigate, useNavigate} from  "react-router-dom";
const useStyles = makeStyles({
  root:  {
    width: '100%',
    position:"fixed",
    bottom:0,
    zIndex: 100,
    backgroundColor:"#34349a", 
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

useEffect (() => {
      if(value === 0) navigate('/');
      else if (value === 1) navigate('/movies');
      else if (value === 3) navigate('/search');
      else if (value === 2) navigate('/series');

    } , [value, navigate] );


return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}        
        showLabels
        className={classes.root}
      >
      
        <BottomNavigationAction 
          style={{color: "white"}}
          label="Trending"  
          icon={<WhatshotIcon />}
        />


        <BottomNavigationAction
         style={{color: "white"}}
          label="Movies"
          icon={< MovieIcon />} 
          />

        <BottomNavigationAction 
         style={{color: "white"}}    
          label="TV Series"  
          icon={<TheatersIcon/>}
         />

        <BottomNavigationAction 
         style={{color: "white"}}
          label="Search"  
          icon={<SearchIcon />}
         />


      </BottomNavigation>

);
}

