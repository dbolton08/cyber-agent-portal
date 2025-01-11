import React from 'react';

const HexagonGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square relative"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              animation: `pulse ${2 + Math.random() * 2}s infinite ${Math.random() * 2}s`,
            }}
          >
            <div className="absolute inset-0 bg-matrix-green/20 backdrop-blur-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonGrid;