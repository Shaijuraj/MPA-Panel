import React, { useState, useMemo } from 'react';
import Card from '../ui/Card';
import { t } from '../../utils/i18n';

const recipes = [
  { id: 1, name: 'Classic Tomato Pasta', cuisine: 'Italian', difficulty: 'Easy', category: 'Main Course', origin: 'Italy', image: 'https://picsum.photos/400/300?random=1' },
  { id: 2, name: 'Chicken Teriyaki', cuisine: 'Japanese', difficulty: 'Medium', category: 'Main Course', origin: 'Japan', image: 'https://picsum.photos/400/300?random=2' },
  { id: 3, name: 'Spicy Beef Tacos', cuisine: 'Mexican', difficulty: 'Easy', category: 'Main Course', origin: 'Mexico', image: 'https://picsum.photos/400/300?random=3' },
  { id: 4, name: 'Vegetable Stir-Fry', cuisine: 'Chinese', difficulty: 'Easy', category: 'Main Course', origin: 'China', image: 'https://picsum.photos/400/300?random=4' },
  { id: 5, name: 'Lentil Soup', cuisine: 'Mediterranean', difficulty: 'Easy', category: 'Soup', origin: 'Greece', image: 'https://picsum.photos/400/300?random=5' },
  { id: 6, name: 'Quiche Lorraine', cuisine: 'French', difficulty: 'Hard', category: 'Breakfast', origin: 'France', image: 'https://picsum.photos/400/300?random=6' },
  { id: 7, name: 'Tiramisu', cuisine: 'Italian', difficulty: 'Medium', category: 'Dessert', origin: 'Italy', image: 'https://picsum.photos/400/300?random=7' },
  { id: 8, name: 'Sushi Platter', cuisine: 'Japanese', difficulty: 'Hard', category: 'Appetizer', origin: 'Japan', image: 'https://picsum.photos/400/300?random=8' },
  { id: 9, name: 'Guacamole', cuisine: 'Mexican', difficulty: 'Easy', category: 'Appetizer', origin: 'Mexico', image: 'https://picsum.photos/400/300?random=9' },
  { id: 10, name: 'Caesar Salad', cuisine: 'American', difficulty: 'Easy', category: 'Salad', origin: 'Mexico', image: 'https://picsum.photos/400/300?random=10' },
  { id: 11, name: 'Miso Soup', cuisine: 'Japanese', difficulty: 'Easy', category: 'Soup', origin: 'Japan', image: 'https://picsum.photos/400/300?random=11' },
  { id: 12, name: 'Apple Pie', cuisine: 'American', difficulty: 'Medium', category: 'Dessert', origin: 'USA', image: 'https://picsum.photos/400/300?random=12' },
];

const RecipeLibrary: React.FC<{ language: string }> = ({ language }) => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [originFilter, setOriginFilter] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(recipes.map(r => r.category)))], []);
  const origins = useMemo(() => ['All', ...Array.from(new Set(recipes.map(r => r.origin)))], []);

  const filteredRecipes = recipes.filter(recipe => {
    const categoryMatch = categoryFilter === 'All' || recipe.category === categoryFilter;
    const originMatch = originFilter === 'All' || recipe.origin === originFilter;
    return categoryMatch && originMatch;
  });

  const clearFilters = () => {
    setCategoryFilter('All');
    setOriginFilter('All');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t(language, 'recipe_library')}</h1>
      
      <Card className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t(language, 'filter_by_category')}</label>
            <select
              id="category-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              {categories.map(c => <option key={c} value={c}>{c === 'All' ? t(language, 'all_categories') : c}</option>)}
            </select>
          </div>
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="origin-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t(language, 'filter_by_origin')}</label>
            <select
              id="origin-filter"
              value={originFilter}
              onChange={(e) => setOriginFilter(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              {origins.map(o => <option key={o} value={o}>{o === 'All' ? t(language, 'all_origins') : o}</option>)}
            </select>
          </div>
          <div className="self-end">
            <button
              onClick={clearFilters}
              className="py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {t(language, 'clear_filters')}
            </button>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRecipes.length > 0 ? filteredRecipes.map(recipe => (
          <Card key={recipe.id} className="overflow-hidden !p-0">
            <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
              <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300">
                <span>{recipe.cuisine}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'}`}>
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </Card>
        )) : (
          <p className="col-span-full text-center text-gray-700 dark:text-gray-300">{t(language, 'no_recipes_found')}</p>
        )}
      </div>
    </div>
  );
};

export default RecipeLibrary;