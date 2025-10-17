
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-dark-sidebar rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
