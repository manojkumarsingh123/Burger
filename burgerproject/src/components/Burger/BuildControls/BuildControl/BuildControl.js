import React from 'react';
import classes from './Buildcontrol.css';  

/*import clases object from css file */
const Buildcontrol = (props) =>(
    <div className ={classes.BuildControl}>
     <div className= { classes.Label} >
         {props.label}
     </div>
     
    <button className= { classes.Less} onClick={props.removed}> Less </button>
   
    <button className= { classes.More} onClick ={props.added}> More </button>
    
    

    
        

    </div>
);

export default Buildcontrol;





/* if want output dynamically {props.label }
 <button> Less </button>
    <button> more</button> for add or remove ingrident
*/