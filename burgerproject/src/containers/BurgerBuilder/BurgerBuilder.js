/* add here burger builder commnt 
use cls based component 
*/
import React,{ Component } from 'react';
import Auxl from '../../hoc/Auxl';

import Burger from '../../components/Burger/Burger'; 

import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 

const INGREIDENT_PRICES ={
salad : 0.5,
cheese: 0.4,
meat :1.3,
bacon :0.7

};
//JS OBJECTS TRATE ITEM PRICE Above


class BurgerBuilder extends Component{
    state ={

     ingridents :
     {
         salad:0,
         bacon:0,
         cheese:0,
         meat:0
     },
     totalprice:4  

    }

//now write here logic to add or less the element
   addIngrideintHandler = (type) => {

    const oldCount = this.state.ingridents[type];
    const updatedCount =oldCount +1;
    const  updatdIngridient ={
        ...this.state.ingridents

   };
   updatdIngridient[type]=updatedCount;
   const priceAddition =INGREIDENT_PRICES[type];
   const oldPrice = this.state.totalprice;
   const newPrice = oldPrice + priceAddition;
   this.setState({totalprice:newPrice,ingridents:updatdIngridient});
   }


   removeIngrideintHandler = (type) => {

    const oldCount = this.state.ingridents[type];
    const updatedCount =oldCount -1 ;
    const  updatdIngridient ={
        ...this.state.ingridents

   };
   updatdIngridient[type]=updatedCount;
   const priceDeducting =INGREIDENT_PRICES[type];
   const oldPrice = this.state.totalprice;
   const newPrice = oldPrice + priceDeducting ;
   this.setState({totalprice:newPrice,ingridents:updatdIngridient});
   }




//spread operator ... to distribute the properties of the old ingrident state into the new object i am creating here
  
    render(){
        return(
       
            <Auxl>
            <Burger ingridents={this.state.ingridents}/>

           <BuildControls
            ingridentAdded ={this.addIngrideintHandler}
            ingridentRemoved = {this.removeIngrideintHandler}/>


            </Auxl>
         

        );
    }
}
export default BurgerBuilder;
/* use this burger builder use in ap js to 
    <Burger></Burger> here use burger component
*/

