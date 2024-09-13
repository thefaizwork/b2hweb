import React from 'react';

const CarsShowcase = () => {
  return (
    <section className="bg-red-600 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-10 font-bold">100+ Tier Cars</h2>
        <div className="flex flex-col items-center">
          <img src="/path-to-car-image.jpg" alt="Car Image" className="w-3/4 max-w-md mb-4" />
          <p className="text-center">Get in and drive. Customize your car for any race!</p>
        </div>
      </div>
    </section>
  );
};

export default CarsShowcase;
