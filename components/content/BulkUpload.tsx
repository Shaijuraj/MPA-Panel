import React, { useState } from 'react';
import Card from '../ui/Card';
import { t } from '../../utils/i18n';

const dummyParsedData = [
  { origin_country: 'Italy', origin_city: 'Rome', recipe_name: 'Spaghetti Carbonara', ingredients: 'Spaghetti, Eggs, Pancetta, Parmesan, Black Pepper', steps: '1. Cook spaghetti. 2. Fry pancetta. 3. Whisk eggs and cheese. 4. Combine all.', calories: '600', timestamp: '2024-07-29T10:00:00Z' },
  { origin_country: 'Japan', origin_city: 'Tokyo', recipe_name: 'Chicken Katsu', ingredients: 'Chicken breast, Panko, Flour, Egg', steps: '1. Pound chicken. 2. Coat in flour, egg, panko. 3. Fry until golden brown.', calories: '550', timestamp: '2024-07-29T10:05:00Z' },
  { origin_country: 'Mexico', origin_city: 'Oaxaca', recipe_name: 'Mole Negro', ingredients: 'Chilies, Chocolate, Spices, Chicken', steps: 'Complex process involving toasting and grinding ingredients to make a sauce.', calories: '750', timestamp: '2024-07-29T10:10:00Z' },
];

const requiredHeaders = ['origin_country', 'origin_city', 'recipe_name', 'ingredients', 'steps', 'calories', 'timestamp'];

const BulkUpload: React.FC<{ language: string }> = ({ language }) => {
    const [fileName, setFileName] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [parsedData, setParsedData] = useState<typeof dummyParsedData | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setIsProcessing(true);
            setParsedData(null);
            // Simulate file processing
            setTimeout(() => {
                setParsedData(dummyParsedData);
                setIsProcessing(false);
            }, 2000);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">{t(language, 'bulk_upload_title')}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title={t(language, 'upload_instructions')}>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{t(language, 'bulk_upload_desc')}</p>
                    
                    <h4 className="font-semibold mb-2">{t(language, 'required_format')}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{t(language, 'column_headers')}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                        {requiredHeaders.map(header => (
                             <code key={header} className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded">{header}</code>
                        ))}
                    </div>

                    <label htmlFor="file-upload" className="relative cursor-pointer mt-4 flex w-full flex-col items-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 text-center hover:border-primary dark:hover:border-primary transition-colors">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="mt-2 block text-sm font-semibold text-primary">{t(language, 'upload_cta')}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{t(language, 'upload_formats')}</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".csv" onChange={handleFileChange} />
                    </label>

                    {isProcessing && <p className="mt-4 text-center">{t(language, 'processing_file')}</p>}
                    {fileName && !isProcessing && parsedData && <p className="mt-4 text-center text-green-600">{fileName} {t(language, 'upload_success')}</p>}
                </Card>

                <Card title="Upload Preview">
                    {isProcessing ? (
                         <div className="flex justify-center items-center h-full">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                        </div>
                    ) : parsedData ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        {requiredHeaders.map(h => <th key={h} className="px-4 py-2 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase">{t(language, `column_${h.split('_')[1]}`)}</th>)}
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-dark-sidebar divide-y divide-gray-200 dark:divide-gray-700">
                                    {parsedData.map((row, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 whitespace-nowrap">{row.origin_country}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{row.origin_city}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{row.recipe_name}</td>
                                            <td className="px-4 py-2 whitespace-normal truncate max-w-xs">{row.ingredients}</td>
                                            <td className="px-4 py-2 whitespace-normal truncate max-w-xs">{row.steps}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{row.calories}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{row.timestamp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-700 dark:text-gray-300">
                            <p>A preview of your uploaded data will appear here.</p>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default BulkUpload;
