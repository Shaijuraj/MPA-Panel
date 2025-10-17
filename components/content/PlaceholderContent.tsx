
import React from 'react';
import Card from '../ui/Card';

interface PlaceholderContentProps {
  title: string;
}

const PlaceholderContent: React.FC<PlaceholderContentProps> = ({ title }) => {
  return (
    <Card>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-500">Content for this section is under construction.</p>
        <div className="mt-8">
            <img src={`https://picsum.photos/800/400?random=${title}`} alt="Placeholder" className="mx-auto rounded-lg shadow-lg"/>
        </div>
      </div>
    </Card>
  );
};

export default PlaceholderContent;
