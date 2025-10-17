import React, { useState } from 'react';
import Card from '../ui/Card';
import { GoogleGenAI, Type } from "@google/genai";
import { t } from '../../utils/i18n';

interface Recipe {
  name: string;
  description: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  origin: string;
  ingredients: string[];
  steps: string[];
}

const AiRecipeAssistant: React.FC<{ language: string }> = ({ language }) => {
  const [ingredients, setIngredients] = useState<string>('chicken breast, rice, broccoli, soy sauce');
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleGenerateRecipe = async () => {
    setError('');
    setIsLoading(true);
    setGeneratedRecipe(null);
    setIsSaved(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      
      const recipeSchema = {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          cuisine: { type: Type.STRING },
          difficulty: { type: Type.STRING, enum: ['Easy', 'Medium', 'Hard'] },
          category: { type: Type.STRING },
          origin: { type: Type.STRING },
          ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
          steps: { type: Type.ARRAY, items: { type: Type.STRING } },
        },
        required: ['name', 'description', 'cuisine', 'difficulty', 'category', 'origin', 'ingredients', 'steps']
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Create a recipe using these ingredients: ${ingredients}. Guess the cuisine, origin, difficulty, and a suitable category.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: recipeSchema,
        },
      });

      const recipeJson = JSON.parse(response.text);
      setGeneratedRecipe(recipeJson);

    } catch (e) {
      console.error(e);
      setError('Failed to generate recipe. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveRecipe = () => {
    // In a real application, you would dispatch an action to add this recipe to your global state or database.
    console.log("Saving recipe:", generatedRecipe);
    setIsSaved(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card title={t(language, 'ai_recipe_assistant')}>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Enter Ingredients
          </label>
          <textarea
            id="ingredients"
            rows={5}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 block w-full rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            placeholder="e.g., ground beef, onions, tomatoes, pasta"
          />
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">Separate ingredients with commas.</p>
        </div>
        <button
          onClick={handleGenerateRecipe}
          disabled={isLoading || !ingredients.trim()}
          className="mt-4 w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Recipe'}
        </button>
        {error && <p className="mt-4 text-sm text-center text-red-500">{error}</p>}
      </Card>
      <Card title="Generated Recipe">
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        {generatedRecipe && (
          <div className="flex flex-col h-full">
            <div className="prose prose-sm sm:prose dark:prose-invert max-w-none flex-grow">
                <h3 className="!mt-0 !mb-2">{generatedRecipe.name}</h3>
                <p className="text-sm italic text-gray-600 dark:text-gray-400 !my-0">{generatedRecipe.description}</p>
                <div className="flex flex-wrap gap-x-4 text-xs my-3">
                    <span><strong>Cuisine:</strong> {generatedRecipe.cuisine}</span>
                    <span><strong>Origin:</strong> {generatedRecipe.origin}</span>
                    <span><strong>Difficulty:</strong> {generatedRecipe.difficulty}</span>
                    <span><strong>Category:</strong> {generatedRecipe.category}</span>
                </div>

                <h4 className="!mb-1">Ingredients</h4>
                <ul className="!my-0">
                    {generatedRecipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

                <h4 className="!mt-4 !mb-1">Steps</h4>
                <ol className="!my-0">
                    {generatedRecipe.steps.map((step, index) => <li key={index}>{step}</li>)}
                </ol>
            </div>
             <button
                onClick={handleSaveRecipe}
                disabled={isSaved}
                className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSaved ? 'Saved to Library!' : 'Save to Library'}
              </button>
          </div>
        )}
        {!isLoading && !generatedRecipe && (
            <div className="flex items-center justify-center h-full text-gray-700 dark:text-gray-300">
                <p>Your generated recipe will appear here.</p>
            </div>
        )}
      </Card>
    </div>
  );
};

export default AiRecipeAssistant;