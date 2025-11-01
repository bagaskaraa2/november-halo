import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  "helloww... November 2nd is your birthday, right?",
  "happy level up day!!!...semoga wishlist kamu tercapai yaa, dilancarkan semuanyaa...",
  "hari ini bukan cuma soal nambah umur, tapi soal gimana kamu udah tumbuh sejauh ini jadi versi kamu yang lebih dewasa, lebih bijak, dan lebih tenang.",
  "That's a new chapter for you, be the happiest version of yourself, take care of your health, and love who you are. I'll be happy if you're doing well",
  "bonus 💙"
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else if (index === slides.length - 1) {
      setShowPhoto(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-200 to-blue-400 text-blue-900 p-6">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold mb-8 max-w-xl"
      >
        {slides[index]}
      </motion.h1>

      {!showPhoto ? (
        <motion.button
          onClick={handleNext}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition-all"
        >
          {["coba click aku","click akuuu","click aku lagii","click aku lagi","sekalii lagi hehe"][index]}
        </motion.button>
      ) : (
        <motion.img
          src="/bonus.jpg"
          alt="bonus"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-xl w-64 md:w-80 mt-4"
        />
      )}
    </div>
  );
}
