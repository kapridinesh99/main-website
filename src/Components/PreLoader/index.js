import { useState, useEffect } from "react";
import "./preloader.css"

function Preloader({ isOpen, closeModal }) {
  const [showModal, setShowModal] = useState(false);

  // Use useEffect to show the modal when the user comes to the Home screen
  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`fixed inset-1 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } ${showModal ? "" : "hidden"}`}>
      <div className="flex justify-center items-center m-10 h-screen">
        <div className="bg-gradient-to-r from-black to-gray-700 md:w-screen w-full p-6 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button
              className="text-gray-400 font-extrabold text-3xl hover:text-red-500"
              onClick={handleCloseModal}>
              X
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-4">
            <div className="preloader w-full border-2 p-4  border-gray-800 md:w-1/2 pr-2 overflow-y-auto max-h-[46vh] sm:max-h-[70vh]">
              <h2 className="sm:text-4xl text-xl text-white font-semibold">
                Please Read Carefully
              </h2>
              <div className="text-gray-200 text-left pt-4 md:pt-10">
                <p className="mb-4">
                  Real Value Enterprises is an Indian Direct Selling Company.
                  The company sells its products through the Direct selling
                  method (to the Direct Seller).
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Any Indian citizen who is above 18 years of age can apply to
                    become a Direct seller of the Company's products.
                  </li>
                  <li className="mb-2">
                    The company does not charge any fee for distributorship.
                  </li>
                  <li className="mb-2">
                    Neither the company gives you any kind of job nor you become
                    the agent of the company. You don't even get any kind of
                    fixed salary. You start a Business simply by becoming an
                    Independent Distributor of the Company's products. You can
                    earn money by selling these products as per the Business
                    Plan of the company.
                  </li>
                  <li className="mb-2">
                    The relationship between you and the Company is that of an
                    Independent principal to Principal contractor.
                  </li>
                </ol>
              </div>
            </div>
            <div className="preloader w-full border-2 p-4 border-gray-800 md:w-1/2 md:pl-2  overflow-y-auto max-h-[46vh] sm:max-h-[70vh]">
              <h2 className="sm:text-4xl text-xl text-white font-semibold">
                कृपया ध्यान से पढ़ें।
              </h2>
              <div className="text-gray-200 text-left pt-4 md:pt-10">
                <p className="mb-4">
                  रियल वैल्यू इंटरप्राइजेज एक इंडियन डायरेक्ट सेलिंग कंपनी है।
                  कंपनी डायरेक्ट सेलिंग पद्धति द्वारा (डायरेक्ट सेलर को) अपने
                  प्रोडक्ट बेचती है।
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    <p className="mb-2">
                      कोई भी भारतीय नागरिक जो 18 वर्ष से अधिक उम्र का हो वह
                      कंपनी के प्रोडक्ट का डायरेक्ट सेलर बनने के लिए आवेदन कर
                      सकता है।
                    </p>
                  </li>
                  <li className="mb-2">
                    <p className="mb-2">
                      डिस्ट्रीब्यूटर बनने के लिए कंपनी किसी भी प्रकार का कोई
                      शुल्क नहीं लेती है।
                    </p>
                  </li>
                  <li className="mb-2">
                    <p className="mb-2">
                      कंपनी आपको किसी भी प्रकार की कोई नौकरी नहीं देती, न ही आप
                      कंपनी के Agent बनते हैं। आपको किसी भी प्रकार की फिक्स
                      सैलरी भी नहीं मिलती है। आप सिर्फ कंपनी के प्रोडक्ट के
                      स्वतंत्र डिस्ट्रीब्यूटर बनकर बिज़नेस शुरु करते हैं। आप इन
                      प्रोडक्ट को बेचकर कंपनी के Business Plan के अनुसार पैसा
                      कमा सकते हैं।
                    </p>
                  </li>
                  <li className="mb-2">
                    <p className="mb-2">
                      आपका और कंपनी का रिलेशन इंडिपेंडेंट प्रिंसिपल to प्रिंसिपल
                      कॉन्ट्रैक्टर्स का होता है।
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;