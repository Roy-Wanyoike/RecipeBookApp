import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddRecipeScreen = ({ navigation, addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = () => {
    addRecipe({ name, description, ingredients: ingredients.split(','), instructions });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Description" onChangeText={setDescription} />
      <TextInput placeholder="Ingredients (comma-separated)" onChangeText={setIngredients} />
      <TextInput placeholder="Instructions" onChangeText={setInstructions} />
      <Button title="Add Recipe" onPress={handleSubmit} />
    </View>
  );
};

export default AddRecipeScreen;
