# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<nav className="bg-red-600 text-white py-4 px-8 flex justify-between items-center rounded-full w-11/12 mx-auto mt-4">
        <div className="flex items-center space-x-8">
          {/* Back arrow */}
          <button className="text-2xl">
            <span className="text-white text-3xl">{'\u21A9'}</span> {/* Unicode for back arrow */}
          </button>

          {/* Navigation Links */}
          <a href="#" className="text-white text-lg font-semibold">How to play</a>
          <a href="#" className="text-white text-lg font-semibold">Faqs</a>
          <a href="#" className="text-white text-lg font-semibold">Forum</a>
          <a href="#" className="text-white text-lg font-semibold">Shop</a>
        </div>

        {/* Connect Button */}
        <button className="border-2 border-white text-lg font-semibold px-6 py-2 rounded-full">
          + Connect
        </button>
      </nav>



       <div className="flex justify-center items-center h-full mt-[96px]">
        <div className="relative w-full max-w-[900px] h-[480px] mt-[1110px] mr-[700px] bg-white rounded-lg shadow-lg overflow-hidden">
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









      // Add images for the interactive boxes
import InteractiveImage1 from './assets/interactive-image1.jpg'; // Main image 1
import InteractiveImage2 from './assets/interactive-image2.png'; // Main image 2
import InteractiveImage3 from './assets/interactive-image3.jpg'; // Main image 3
import InteractiveImage4 from './assets/interactive-image4.jpg'; // Main image 4

// Small images for the boxes
import SmallImage1 from './assets/small-image1.png';
import SmallImage2 from './assets/small-image2.png';
import SmallImage3 from './assets/small-image3.png';
import SmallImage4 from './assets/small-image4.png';

const App = () => {
  // State to handle the selected image and active box
  const [selectedImage, setSelectedImage] = useState(InteractiveImage1);
  const [activeBox, setActiveBox] = useState(1); // Default active box

  return (
    <div className="App">
      {/* Previous Sections Here */}

      {/* Interactive section with vertically stacked clickable boxes */}
      <div className="flex justify-center items-center bg-white py-16">
        <div className="flex space-x-8">
          {/* Boxes on the left */}
          <div className="flex flex-col space-y-4">
            {/* Box 1 */}
            <button
              className={`w-[350px] h-[150px] border-2 rounded-lg flex items-center p-4 transition-all duration-300 ${
                activeBox === 1 ? 'bg-red-600 text-white' : 'bg-white'
              }`}
              onClick={() => {
                setSelectedImage(InteractiveImage1);
                setActiveBox(1);
              }}
            >
              <img
                src={SmallImage1}
                alt="Small Image 1"
                className="w-16 h-16 mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-xl">100+ Tier Cars</h3>
                <p className="text-sm">Shop exclusive 100+ vehicles</p>
              </div>
            </button>

            {/* Box 2 */}
            <button
              className={`w-[350px] h-[150px] border-2 rounded-lg flex items-center p-4 transition-all duration-300 ${
                activeBox === 2 ? 'bg-red-600 text-white' : 'bg-white'
              }`}
              onClick={() => {
                setSelectedImage(InteractiveImage2);
                setActiveBox(2);
              }}
            >
              <img
                src={SmallImage2}
                alt="Small Image 2"
                className="w-16 h-16 mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-xl">Become a Gang</h3>
                <p className="text-sm">Break the law on the server</p>
              </div>
            </button>

            {/* Box 3 */}
            <button
              className={`w-[350px] h-[150px] border-2 rounded-lg flex items-center p-4 transition-all duration-300 ${
                activeBox === 3 ? 'bg-red-600 text-white' : 'bg-white'
              }`}
              onClick={() => {
                setSelectedImage(InteractiveImage3);
                setActiveBox(3);
              }}
            >
              <img
                src={SmallImage3}
                alt="Small Image 3"
                className="w-16 h-16 mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-xl">Manage a Business</h3>
                <p className="text-sm">Manage supplies, set prices</p>
              </div>
            </button>

            {/* Box 4 */}
            <button
              className={`w-[350px] h-[150px] border-2 rounded-lg flex items-center p-4 transition-all duration-300 ${
                activeBox === 4 ? 'bg-red-600 text-white' : 'bg-white'
              }`}
              onClick={() => {
                setSelectedImage(InteractiveImage4);
                setActiveBox(4);
              }}
            >
              <img
                src={SmallImage4}
                alt="Small Image 4"
                className="w-16 h-16 mr-4"
              />
              <div className="text-left">
                <h3 className="font-bold text-xl">Exclusive Events</h3>
                <p className="text-sm">Join events for B2H perks</p>
              </div>
            </button>
          </div>

          {/* Main image on the right that changes based on the selected box */}
          <div className="w-[600px] h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Main Display"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>