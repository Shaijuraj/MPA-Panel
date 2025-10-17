import React, { useState } from 'react';
import Card from '../ui/Card';

const CreateTheme: React.FC = () => {
    const [themeName, setThemeName] = useState('');
    const [primaryColor, setPrimaryColor] = useState('#4f46e5');
    const [secondaryColor, setSecondaryColor] = useState('#10b981');
    const [backgroundColor, setBackgroundColor] = useState('#f9fafb');
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <Card title="Create or Upload a New Theme">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="themeName" className="block text-sm font-medium">Theme Name</label>
                        <input type="text" id="themeName" value={themeName} onChange={e => setThemeName(e.target.value)} className="mt-1 block w-full rounded-md dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-sm" placeholder="e.g., Ocean Blue" />
                    </div>

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label htmlFor="primaryColor" className="block text-sm font-medium">Primary Color</label>
                            <input type="color" id="primaryColor" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="mt-1 block w-full h-10 rounded-md border-gray-300" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="secondaryColor" className="block text-sm font-medium">Secondary Color</label>
                            <input type="color" id="secondaryColor" value={secondaryColor} onChange={e => setSecondaryColor(e.target.value)} className="mt-1 block w-full h-10 rounded-md border-gray-300" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="backgroundColor" className="block text-sm font-medium">Background Color</label>
                            <input type="color" id="backgroundColor" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} className="mt-1 block w-full h-10 rounded-md border-gray-300" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Upload Logo</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-dark-sidebar rounded-md font-medium text-primary hover:text-indigo-500 focus-within:outline-none">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, SVG up to 10MB</p>
                                {fileName && <p className="text-sm pt-2 text-green-600">{fileName}</p>}
                            </div>
                        </div>
                    </div>
                     <div className="flex justify-end">
                        <button type="submit" className="px-6 py-2 bg-primary text-white font-semibold rounded-md hover:bg-indigo-700">Save Theme</button>
                    </div>
                </form>
                
                <div className="space-y-4">
                     <h4 className="text-lg font-medium">Live Preview</h4>
                     <div className="border rounded-lg p-4" style={{ backgroundColor: backgroundColor }}>
                        <h2 className="text-xl font-bold" style={{ color: primaryColor }}>Theme Preview Title</h2>
                        <p className="mt-2 text-sm" style={{ color: secondaryColor }}>This is some sample text to demonstrate the secondary color.</p>
                        <button className="mt-4 px-4 py-2 text-white font-semibold rounded-md" style={{ backgroundColor: primaryColor }}>
                            Primary Button
                        </button>
                     </div>
                </div>
            </div>
        </Card>
    );
};

export default CreateTheme;