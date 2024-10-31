import React, { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, { ...recipe, id: Date.now().toString() }]);
  };

  return 
  <AppNavigator screenProps={{ recipes, addRecipe }} />;
};

export default App;
