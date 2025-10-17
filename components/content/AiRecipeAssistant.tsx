
import React, { useState } from 'react';
import Card from '../ui/Card';
// import { GoogleGenAI } from "@google/genai";

const AiRecipeAssistant: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('chicken breast, rice, broccoli, soy sauce');
  const [generatedRecipe, setGeneratedRecipe] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateRecipe = async () => {
    setIsLoading(true);
    setGeneratedRecipe('');

    // --- MOCK GEMINI API CALL ---
    // In a real application, you would initialize the Gemini client and make the call here.
    // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // const response = await ai.models.generateContent({
    //   model: 'gemini-2.5-flash',
    //   contents: `Create a simple recipe using the following ingredients: ${ingredients}. Provide a name, ingredients list, and step-by-step instructions.`,
    // });
    // const recipeText = response.text;
    
    // For demonstration, we use a timeout to simulate an API call.
    const mockRecipe = `
**Garlic Soy Chicken & Broccoli**

A quick and delicious weeknight meal that comes together in under 30 minutes.

**Ingredients:**
*   1 lb chicken breast, cut into bite-sized pieces
*   1 cup uncooked rice
*   2 cups broccoli florets
*   3 tbsp soy sauce
*   2 cloves garlic, minced
*   1 tbsp honey
*   1 tsp sesame oil
*   Salt and pepper to taste
*   Olive oil for cooking

**Instructions:**
1.  Cook rice according to package directions.
2.  While rice is cooking, heat olive oil in a large skillet over medium-high heat. Season chicken with salt and pepper and add to the skillet. Cook until golden brown and cooked through.
3.  Add broccoli florets to the skillet and cook for 3-4 minutes until tender-crisp.
4.  In a small bowl, whisk together soy sauce, minced garlic, honey, and sesame oil.
5.  Pour the sauce over the chicken and broccoli. Stir to combine and let the sauce thicken for 1-2 minutes.
6.  Serve the chicken and broccoli over the cooked rice.
    `;

    setTimeout(() => {
      setGeneratedRecipe(mockRecipe);
      setIsLoading(false);
    }, 1500);
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
          disabled={isLoading}
          className="mt-4 w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Recipe'}
        </button>
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
