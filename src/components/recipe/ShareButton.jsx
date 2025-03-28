// import { useState, useEffect } from "react";
// import { FaFacebook, FaWhatsapp, FaTimes } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdContentCopy } from "react-icons/md";
// import PropTypes from "prop-types";
// import { RiShareForwardLine } from "react-icons/ri";

// const ShareButton = ({ recipeId }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const recipeURL = `${window.location.origin}/recipe/${recipeId}`;
//   const recipeText = encodeURIComponent(`Check out this amazing recipe: ${recipeURL}`);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(recipeURL);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
//     } catch (err) {
//       console.error("Failed to copy: ", err);
//     }
//   };

//   return (
//     <div>
//       {/* Share Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="text-white px-4 py-2 rounded-md flex items-center space-x-2 bg-yellow-200 hover:bg-yellow-400 transition-transform active:scale-95"
//       >
//         <RiShareForwardLine className="text-black" size={25} />
//       </button>

//       {/* Popup Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-[#000000d5] bg-opacity-50 z-50">
//           {/* Modal Box */}
//           <div className="bg-white p-5 rounded-lg shadow-lg w-80 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 active:scale-90 transition-transform duration-100 "
//             >
//               <FaTimes size={25} />
//             </button>

//             <h2 className="text-lg font-bold mb-4">Share Recipe</h2>

//             <div className="flex gap-5">
//               {/* Copy Link */}
//               <button
//                 onClick={handleCopy}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-600  active:scale-85 transition-transform duration-300"
//               >
//                 <MdContentCopy />
                
//               </button>

//               {/* WhatsApp Share */}
//               <a
//                 href={`https://api.whatsapp.com/send?text=${recipeText}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-600 active:scale-85 transition-transform duration-300"
//               >
//                 <FaWhatsapp />
//               </a>

//               {/* Twitter Share */}
//               <a
//                 href={`https://twitter.com/intent/tweet?text=${recipeText}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-500 active:scale-85 transition-transform duration-300"
//               >
//                 <FaXTwitter />
//               </a>

//               {/* Facebook Share */}
//               <a
//                 href={`https://www.facebook.com/sharer/sharer.php?u=${recipeURL}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-800 active:scale-85 transition-transform duration-300"
//               >
//                 <FaFacebook />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// ShareButton.propTypes = {
//   recipeId: PropTypes.string.isRequired, // Ensures recipeId is a required string
// };

// export default ShareButton;
import { FaFacebook, FaWhatsapp, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import PropTypes from "prop-types";
import { RiShareForwardLine } from "react-icons/ri";

const ShareButton = ({ recipeId, isOpen, setIsOpen, openShareModal }) => {

  const recipeURL = `${window.location.origin}/recipe/${recipeId}`;
  const recipeText = encodeURIComponent(`Check out this amazing recipe: ${recipeURL}`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(recipeURL);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      {/* Share Button */}
      <button
        onClick={() => openShareModal(recipeId)}
        className="text-white px-4 py-2 rounded-md flex items-center space-x-2 bg-yellow-200 hover:bg-yellow-400 transition-transform active:scale-95"
      >
        <RiShareForwardLine className="text-black" size={25} />
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000d5] bg-opacity-50 z-50">
          {/* Modal Box */}
          <div className="bg-white p-5 rounded-lg shadow-lg w-80 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 active:scale-90 transition-transform duration-100"
            >
              <FaTimes size={25} />
            </button>

            <h2 className="text-lg font-bold mb-4">Share Recipe</h2>

            <div className="flex gap-5">
              {/* Copy Link */}
              <button
                onClick={handleCopy}
                className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-600 active:scale-85 transition-transform duration-300"
              >
                <MdContentCopy />
              </button>

              {/* WhatsApp Share */}
              <a
                href={`https://api.whatsapp.com/send?text=${recipeText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-600 active:scale-85 transition-transform duration-300"
              >
                <FaWhatsapp />
              </a>

              {/* Twitter Share */}
              <a
                href={`https://twitter.com/intent/tweet?text=${recipeText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-500 active:scale-85 transition-transform duration-300"
              >
                <FaXTwitter />
              </a>

              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${recipeURL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-800 active:scale-85 transition-transform duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ShareButton.propTypes = {
  recipeId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  openShareModal: PropTypes.func,
};

export default ShareButton;
