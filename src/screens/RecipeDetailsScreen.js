import React from 'react';
import { View, Text, Button } from 'react-native';

const RecipeDetailsScreen = ({ route, navigation }) => {
  const { recipe } = route.params;

  return (
    <View>
      <Text>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
      <Text>{recipe.ingredients.join(', ')}</Text>
      <Text>{recipe.instructions}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RecipeDetailsScreen;
