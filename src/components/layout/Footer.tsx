import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-[#183928] text-[#e8fff1] pt-14 pb-10">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-8">
                {/* Logo & About */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-3 text-[#a2f7c2] drop-shadow">Calorie AI</h2>
                    <p className="text-center leading-relaxed max-w-xs  w-full">
                        Your AI-powered digital cookbook for personalized recipes and nutrition insights.
                    </p>
                </div>

                {/* Socials */}
                <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-xl font-semibold mb-2 text-[#a2f7c2]">Follow Us</h3>
                    <div className="flex gap-3">
                        <a href="#" className="p-3 bg-[#e7ffe2] text-green-900 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="p-3 bg-[#e7ffe2] text-blue-500 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="p-3 bg-[#e7ffe2] text-pink-600 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" className="p-3 bg-[#e7ffe2] text-blue-700 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="text-center lg:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-[#a2f7c2]">Subscribe</h3>
                    <p className="text-base mb-4">Get the latest AI-generated recipes straight to your inbox!</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 p-3 rounded-l-lg text-green-900 bg-[#ecfff6] border-0 focus:outline-none focus:ring-2 focus:ring-[#a2f7c2]"
                        />
                        <button className="bg-gradient-to-r from-[#a2f7c2] to-[#48b96f] px-7 py-3 rounded-r-lg font-semibold text-[#183928] hover:bg-[#d8fcf0] transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 text-sm border-t border-[#55ce92]/20 pt-6 px-4">
                <p>
                    &copy; {new Date().getFullYear()} Calorie AI. All Rights Reserved. |
                    <a href="#" className="hover:underline ml-1">Privacy Policy</a> |
                    <a href="#" className="hover:underline ml-1">Terms of Service</a>
                </p>
            </div>

            {/* Animation Keyframes */}
            <style>{`
        @keyframes cardPop {
          0% { opacity:0; transform: translateY(60px) scale(.97);}
          65% {opacity:1;}
          100% {opacity:1; transform:none;}
        }
        .animate-cardPop { animation: cardPop 0.65s cubic-bezier(.37,1.01,.57,.92) both; }
      `}</style>
        </footer>
    );
};

export default Footer;
