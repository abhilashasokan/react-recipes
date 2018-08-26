import React from 'react';

const RecipiesList = (props) => (
    <div style={props.style}>
       <h2>Recipies</h2>
       <ul>
           <li>
               <span>Pizza Chicken</span>
               <span>Pizza</span>
           </li>
           <li>
               <span>Coffee Cake</span>
               <span>Dessert</span>
           </li>
           <li>
               <span>Pork Tenderloin</span>
               <span>Meat</span>
           </li>
       </ul>
    </div>
);

export default RecipiesList; 
