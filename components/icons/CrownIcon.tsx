import React from 'react';

const CrownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-3-3-3 3 3-10 3 10zM5.333 7.667A8.003 8.003 0 0112 5a8.003 8.003 0 016.667 2.667m-13.334 0a8 8 0 0113.334 0" />
    </svg>
);

export default CrownIcon;
