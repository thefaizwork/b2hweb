import React from 'react';

const StepsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10 font-bold">How to Start Playing</h2>
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Step 1</h3>
              <p>Close your Steam Account and download FiveM application.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Step 2</h3>
              <p>Click on connect and enjoy the journey!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
