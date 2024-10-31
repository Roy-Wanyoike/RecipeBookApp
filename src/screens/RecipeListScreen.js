import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const RecipeListScreen = ({ navigation, recipes }) => {
  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
            <Text>{item.name} - {item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecipeListScreen;
