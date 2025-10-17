
import React from 'react';
import Card from '../ui/Card';

const recipes = [
  { id: 1, name: 'Classic Tomato Pasta', cuisine: 'Italian', difficulty: 'Easy', image: 'https://picsum.photos/400/300?random=1' },
  { id: 2, name: 'Chicken Teriyaki', cuisine: 'Japanese', difficulty: 'Medium', image: 'https://picsum.photos/400/300?random=2' },
  { id: 3, name: 'Spicy Beef Tacos', cuisine: 'Mexican', difficulty: 'Easy', image: 'https://picsum.photos/400/300?random=3' },
  { id: 4, name: 'Vegetable Stir-Fry', cuisine: 'Chinese', difficulty: 'Easy', image: 'https://picsum.photos/400/300?random=4' },
  { id: 5, name: 'Lentil Soup', cuisine: 'Mediterranean', difficulty: 'Easy', image: 'https://picsum.photos/400/300?random=5' },
  { id: 6, name: 'Quiche Lorraine', cuisine: 'French', difficulty: 'Hard', image: 'https://picsum.photos/400/300?random=6' },
];

const RecipeLibrary: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Recipe Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <Card key={recipe.id} className="overflow-hidden !p-0">
            <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{recipe.cuisine}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeLibrary;
