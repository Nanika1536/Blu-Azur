import React from "react";
import { motion } from "framer-motion";

function Section() {
  const features = [
    { img: "Bateau1.png", text: "Sports nautiques, plongée, voile" },
    { img: "Velo2.png", text: "Randonnées et vélo dans l’Estérel" },
    { img: "Casino3.png", text: "Casino et vie nocturne animée" },
    { img: "Village4.png", text: "Villages perchés et marchés provençaux" },
    { img: "Golf5.png", text: "Un paradis pour les golfeurs" },
    { img: "Montagne6.png", text: "Montagne et vélo de route" },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Saint Raphaël, l’endroit parfait pour vivre la Côte d’Azur
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 mb-12"
        >
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques
          sauvages, Saint-Raphaël est une destination de rêve. Entre mer
          turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique
          pour la détente et l’aventure.
        </motion.p>

        {/* Grille des activités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-20 h-20 mb-4 object-contain"
              />
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 font-medium"
        >
          Flânez sur la Promenade des Bains, explorez les criques secrètes ou
          partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la
          Côte d’Azur dans toute sa splendeur !
        </motion.p>
      </div>
    </section>
  );
}

export default Section;
