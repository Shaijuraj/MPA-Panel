import React, { useState } from 'react';
import Card from '../ui/Card';
// Fix: Import GoogleGenAI
import { GoogleGenAI } from "@google/genai";

const AiRecipeAssistant: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('chicken breast, rice, broccoli, soy sauce');
  const [generatedRecipe, setGeneratedRecipe] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Fix: Add error state
  const [error, setError] = useState<string>('');

  const handleGenerateRecipe = async () => {
    // Fix: Clear previous error
    setError('');
    setIsLoading(true);
    setGeneratedRecipe('');

    try {
      // Fix: Implement Gemini API call
      // The API key must be obtained exclusively from the environment variable `process.env.API_KEY`.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Create a simple recipe using the following ingredients: ${ingredients}. Provide a name, a short description, an ingredients list, and step-by-step instructions. Format the response in Markdown.`,
      });
      const recipeText = response.text;
      setGeneratedRecipe(recipeText);
    } catch (e) {
      console.error(e);
      // Fix: Handle API errors gracefully
      setError('Failed to generate recipe. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card title="AI Recipe Assistant">
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
          <p className="mt-2 text-sm text-gray-500">Separate ingredients with commas.</p>
        </div>
        <button
          onClick={handleGenerateRecipe}
          disabled={isLoading || !ingredients.trim()}
          className="mt-4 w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Recipe'}
        </button>
        {/* Fix: Display error message */}
        {error && <p className="mt-4 text-sm text-center text-red-500">{error}</p>}
      </Card>
      <Card title="Generated Recipe">
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        {generatedRecipe && (
          <div className="prose prose-sm sm:prose dark:prose-invert max-w-none whitespace-pre-wrap font-sans">
              {generatedRecipe}
          </div>
        )}
        {!isLoading && !generatedRecipe && (
          <p className="text-gray-500 text-center">Your generated recipe will appear here.</p>
        )}
      </Card>
    </div>
  );
};

export default AiRecipeAssistant;
