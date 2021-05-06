import React from 'react';
import Auxl from '../../hoc/Auxl';
import classes from './Layout.css';

 
/*soutce folder level here need not to mentond auxl.js extns it will detect automatically */



const layout = (props) => (

     <Auxl>
     <div>Toolbar,SideDrawer,Backdrop</div>
     <main className={classes.Content}>

      {props.children} 
      
      
     </main>
     </Auxl> /*full fill the wraping the root elmnt */ 

    
 )
  export default layout; /*which hoing this file to app js file 
  
  /*   props avove means get as arument 
      props childern allow us to use this(above) layout component as wrap around the compont which render to the screen */     
  
  

  