import React from 'react';

// http://reactrecipes.herokuapp.com/v1/recipes
console.log(process.env)
// fetch(process.env.API_URL+'recipes')
//     .then(res => res.json())
//     .then(json => console.log(json));

const RecipieDetails = (props) => (
    <div style={props.style}>
        <h2>Pizza Chicken</h2>
        <img className="recipes-image" src="https://images.media-allrecipes.com/userphotos/720x405/1502642.jpg" />
        <div>
            <span>Pizza </span>
            <span>552 calories</span>
        </div>
        <h3>Ingredients</h3>
            <ul>
                <li>1/2 cup Italian-seasoned bread crumbs</li>
                <li>1/4 cup grated Parmesan cheese</li>
                <li>1 teaspoon salt</li>
                <li>1 teaspoon ground black pepper</li>
                <li>1/2 cup all-purpose flour</li>
            </ul>
        <h3>Steps</h3>
        <ol>
            <li>Preheat oven to 400 degrees F (200 degrees C).</li>
            <li>Combine bread crumbs, Parmesan cheese, salt, and black pepper in a shallow bowl; place flour into a second bowl. Whisk egg and lemon juice together in a third bowl.</li>
            <li>Dip each chicken breast in egg mixture and dredge in flour; dip again in egg mixture and dredge chicken in crumb mixture until coated. Place coated chicken breasts into a baking dish.</li>
            <li>Bake in the preheated oven until chicken is heated through and crumbs are golden, about 20 minutes.</li>
            <li>Spoon 2 tablespoons pizza sauce onto each chicken breast, sprinkle each with half the mozzarella cheese, and top each with half the pepperoni slices.</li>
            <li>Bake until chicken is no longer pink inside and the juices run clear, about 10 more minutes. An instant-read meat thermometer inserted into the thickest part of a breast should read at least 160 degrees F (70 degrees C).</li>
        </ol>
    </div>
);

export default RecipieDetails; 
