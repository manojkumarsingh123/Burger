import React from 'react';

import classes from './burger.css';

import Burgeringrident from './Burgeringrident/Burgeringrident';
const burger = (props) => {

   let transformedIngrident = Object.keys (props.ingridents)
   .map(igkey => {

       return [...Array (props.ingridents[igkey])].map((_, i) =>{
          return <Burgeringrident key ={igkey + i} type ={igkey}/>;



           // this is look complex is but this just a way to tsfrm an object of key value pair into an array of burger ingrident the value of object imp for to decide how many ingrident i need and the keys imp for to know which type of ingrid i need
          //this is what i return in internal map method
          //here map object into array of ingri in the end
          
          //this creat unique key for each ingrident
       });   //map the element  _use as an argument name to indicate that it,s a blank but index of element important for me
   })   //igkey is something like salad and i simply 1,2,3

  /* map method which runs on an array which contains all our key */ 
/*  here we convert string value into array as many ingrident with quantity just like salad:1 etc we have 

return array here use spred opertor to spreed a new array to construct*/


//now i transformed ingrident above now return it


//reduce built in array function which allow us to transform an array into something else
//it takes function as input 2 arugument automatically that is privious value and current value  
.reduce((arr , el) => {
      return arr.concat(el) //here whatever upadte happen like 2 salad and 1 meat means total 3 which will store in arr .arr here alwys store updated value
   }, []);

if (transformedIngrident.length ===0) {
  transformedIngrident = <p>Please add ingrident</p>
  //when let all infrednt value is 0 means array is empty then this msg must show in output
}
return (
<div className = {classes.Burger}>
    <Burgeringrident type ="bread-top"/>
    
    
    {transformedIngrident}

    


    <Burgeringrident type ="bread-bottom"/>

</div> 
     
//in output we can see clearly burger image with num of salad meat and aother stuff with image

 );
 
};

export default burger;
  /*wrap evrtng inside div 
  
   <Burgeringrident type ="bread-top"/>
   here type must be string as mentioned in prototype validation

   Object.keys is a js object it has a key method which ixtract the keys of the given objects and turns that into an array 
   here we passed array of string that is slad meat...etc


   props. ingridents

   map () is method which excute a function on each element in the array.

   igkey (we will give this argument in the function the name igkey for ingrident key bcoz just part of the array ex salad and so on )




   
  */