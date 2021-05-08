/*build control is functional component which rcv props and return ajx */ 
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
 {label: 'Salad' ,type: 'salad' },
 {label: 'Bacon' ,type: 'bacon' },
 {label: 'Cheese' ,type: 'cheese' },
 {label: 'Meat' ,type: 'meat' },
];
 




const BuildControls = (props) =>(
    <div className = {classes.BuildControls}>

         {controls.map(ctrl =>(
          <BuildControl key ={ctrl.label} label ={ctrl.label} 
          added ={() => props.ingridentAdded(ctrl.type)}
          removed ={() => props.ingridentRemoved(ctrl.type)}/> 
          //acees control type here bcoz we are inside that loop where we are looping through all the controls and each control has a type
       //added property which we are passing to a single build control needs to connected to more button
       // now move to Build control.js file and upadte some in button
         ))}  
    </div>
        
    
);
//inside here i want to loop through all the controls and render a build controls for each
//render the built control for each of them
//inside dive inside {} is loop control constant and call map there and now map each control so each element of this array into a Build control a self closing tag,where you set a key thats required 
//the key cant just be a label bz that is unique identifier and also pass label to this build control component

export default BuildControls;