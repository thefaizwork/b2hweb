import React, { useState } from 'react';
import backgroundImage from './assets/bg.jpg'; // Ensure the path is correct
import ThirdBg from './assets/bg3.jpg'; // New background image
import B1 from './assets/box1.jpg'; // New background image
import B2 from './assets/box3.jpg'; // New background image
import NewBg from './assets/new-bg.png'; // New background image for the additional section

// Add images for the new interactive section
import InteractiveImage1 from './assets/interactive-image1.jpg';
import InteractiveImage2 from './assets/interactive-image2.png';
import InteractiveImage3 from './assets/interactive-image3.jpg';
import InteractiveImage4 from './assets/interactive-image4.jpg';

// Small images for the boxes
import SmallImage1 from './assets/small-image1.png';
import SmallImage2 from './assets/small-image2.png';
import SmallImage3 from './assets/small-image3.png';
import SmallImage4 from './assets/small-image4.png';

const App = () => {
  // State to handle the selected image and active box
  const [selectedImage, setSelectedImage] = useState(InteractiveImage1); // Default image
  const [activeBox, setActiveBox] = useState(1); // Default active box

  return (
    <div className="App">
      {/* Existing Sections */}

      {/* Wrapper to make the image scrollable */}
      <section
        className="h-[1980px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-red-600 text-white py-4 px-8 flex flex-wrap justify-between items-center rounded-full w-full sm:w-5/12 mx-auto mt-0 mb-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-2xl">
              <span className="text-white text-2xl">{'\u21A9'}</span> 
            </button>

            <div className="hidden sm:flex space-x-4">
              <a href="#" className="text-white text-lg font-semibold">How to play</a>
              <a href="#" className="text-white text-lg font-semibold">Faqs</a>
              <a href="#" className="text-white text-lg font-semibold">Forum</a>
              <a href="#" className="text-white text-lg font-semibold">Shop</a>
            </div>
          </div>

          <button className="border-2 border-white text-lg font-semibold px-6 py-2 rounded-full mt-4 sm:mt-0">
            + Connect
          </button>
        </div>

        {/* Content */}
        <div className="flex justify-center items-center h-full mt-[480px] lg:mr-[650px] mx-auto px-4">
          <div className="relative w-full max-w-[900px] h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* New section below the first one */}
      <div
        className="h-[1080px] bg-cover bg-center bg-no-repeat flex flex-wrap justify-center items-center space-x-4 sm:space-x-8"
        style={{
          backgroundImage: `url(${ThirdBg})`,
        }}
      >
        {/* Box 1 */}
        <div className="w-full sm:w-[700px] h-[350px] sm:h-[700px] bg-white shadow-lg rounded-[20px] sm:rounded-[52px] flex justify-center items-center overflow-hidden mb-4 sm:mb-0">
          <img
            src={B1}
            alt="Box 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-[700px] h-[350px] sm:h-[700px] bg-white shadow-lg rounded-[20px] sm:rounded-[52px] flex justify-center items-center overflow-hidden">
          <img
            src={B2}
            alt="Box 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* New additional section */}
      <div
        className="h-[1100px] bg-cover bg-center bg-no-repeat flex justify-center items-center text-white px-4"
        style={{
          backgroundImage: `url(${NewBg})`,
        }}
      >
        {/* Placeholder for future content */}
      </div>

      {/* Interactive section with clickable boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-white py-16 px-4">
        <div className="flex flex-col space-y-4 md:space-y-8 md:space-x-12  ">
          {/* Left side - Interactive boxes */}
          {[{ image: SmallImage1, title: "100+ Tier Cars", desc: "Shop exclusive 100+ vehicles", boxId: 1 },
            { image: SmallImage2, title: "Become a Gang", desc: "Break the law on the server", boxId: 2 },
            { image: SmallImage3, title: "Manage a Business", desc: "Manage supplies, set prices", boxId: 3 },
            { image: SmallImage4, title: "Exclusive Events", desc: "Join events for B2H perks", boxId: 4 }]
            .map(({ image, title, desc, boxId }) => (
              <button
                key={boxId}
                className={`w-full md:w-[350px] h-[150px] lg:ml-12 border-2 rounded-lg flex items-center p-4 transition-all duration-300 ${activeBox === boxId ? 'bg-red-600 text-white' : 'bg-white'}`}
                onClick={() => {
                  setSelectedImage(boxId === 1 ? InteractiveImage1 : boxId === 2 ? InteractiveImage2 : boxId === 3 ? InteractiveImage3 : InteractiveImage4);
                  setActiveBox(boxId);
                }}
              >
                <img
                  src={image}
                  alt={`Small Image ${boxId}`}
                  className="w-16 h-16 mr-4"
                />
                <div className="text-left">
                  <h3 className="font-bold text-xl">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </div>
              </button>
            ))}
        </div>

        {/* Right side - Main image display */}
        <div className="w-full md:w-[600px] h-[400px] md:h-[600px] bg-white shadow-lg rounded-lg overflow-hidden lg:ml-24 mt-4 md:mt-0">
          <img
            src={selectedImage}
            alt="Main Display"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
