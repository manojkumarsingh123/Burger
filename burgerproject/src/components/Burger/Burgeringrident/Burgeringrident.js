/* statels copmnent */
import React, { Component } from 'react';

import PropTypes from 'prop-types';
 /*here we used class based fxn beacuse we use proptype 
 change const tp class below*/

import classes from './Burgeringrident.css';

class Burgeringrident extends Component {
   render(){
 let ingrident = null;
  switch(this.props.type){
     case('bread-bottom'):
      ingrident = <div className={classes.BreadBottom}></div>;
      break;
     case('bread-top'):
      ingrident=(
         <div className ={classes.BreadTop}>

          <div className ={classes.Seeds1}></div>
          <div className ={classes.Seeds2}></div>

         </div>
     );
       break;
    case('meat'):
    ingrident = <div className={classes.Meat  }></div>;

    break;
    case('cheese'):
    ingrident = <div className={classes.Cheese }></div>;
    break;
    case('bacon'):
    ingrident = <div className={classes.Bacon }></div>;
    break;
    case('salad'):
    ingrident = <div className={classes.Salad   }></div>;
    break;
    default:
        ingrident =null;
      
 }

    return ingrident;
}

}
Burgeringrident.protoTypes =  {
    type :PropTypes.string.isRequired
};
export default Burgeringrident;
/* using the type property by proptypes 
type must we string and we try ingrident without type it will give an error*/