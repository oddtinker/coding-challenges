/* A dessert order simulator, from Qualified.
Input dietary restrictions must be accounted for in the output.
Both input and output must be of type string. */

const recipes = {
  Classic: 'strawberry, banana, pineapple, mango, peach, honey, ice, yogurt',
  'Forest Berry': 'strawberry, raspberry, blueberry, honey, ice, yogurt',
  Freezie: 'blackberry, blueberry, black currant, grape juice, frozen yogurt',
  Greenie: 'green apple, kiwi, lime, avocado, spinach, ice, apple juice',
  'Vegan Delite': 'strawberry, passion fruit, pineapple, mango, peach, ice, soy milk',
  'Just Desserts': 'banana, ice cream, chocolate, peanut, cherry',
};

// Sort ingredients once, before the main function
for (const [key, value] of Object.entries(recipes)) {
  recipes[key] = value.split(', ').sort();
}

function formOrder(order) {
  // Split input into an array...
  let separators = /[,-]/;
  order = order.split(separators);
  // ...where the value at index 0 corresponds to a key in the recipes object...
  let orderedIngredients = recipes[order[0]];
  // ...and the rest of the order array holds input dietary restrictions.
  let restrictions = order.slice(1);
  let finalOrder = orderedIngredients.filter(item => !restrictions.includes(item));

  return finalOrder.join(',');
}

export default formOrder;