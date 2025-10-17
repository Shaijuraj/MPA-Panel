import React from 'react';

const DumbbellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 6.75l-4.5 4.5m-4.5-4.5l4.5 4.5M12 12l4.5 4.5m-4.5-4.5l-4.5 4.5M3 6.75l4.5 4.5M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12H2m10-8V2m8 10h2m-10 8v2" />
    </svg>
);

// A simple dumbbell icon might be better. Let's try another one.
const SimpleDumbbellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h3m14 0h3M5 12a3 3 0 013-3h6a3 3 0 013 3v0a3 3 0 01-3 3H8a3 3 0 01-3-3v0z" />
    </svg>
);


export default SimpleDumbbellIcon;
