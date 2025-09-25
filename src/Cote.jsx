import React from "react";
import { motion } from "framer-motion";

function Cote() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('image_fond_cote.png')" }}
    >
      {/* Overlay sombre pour le texte */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Image décorative */}
        <motion.img
          src="image_dans_cote.png"
          alt="Côte d'Azur"
          className="mb-6 w-48 md:w-64 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Titre */}
        <motion.h2
          className="text-xl md:text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Un point de départ idéal pour découvrir la Côte d’Azur !
        </motion.h2>

        {/* Texte */}
        <motion.p
          className="text-white text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Entre mer et montagne, Saint-Raphaël est une destination idéale pour
          les amateurs de plein air et de découvertes. Randonnées dans le Massif
          de l’Estérel, sports nautiques sur les eaux cristallines de la
          Méditerranée, balades en bateau vers les îles de Lérins ou encore
          golf et cyclisme sur des parcours panoramiques, chaque journée offre
          son lot d’aventures. Entre marchés provençaux, villages perchés et
          animations locales, l’art de vivre azuréen se dévoile à chaque instant,
          faisant de Saint-Raphaël un lieu vibrant et inoubliable.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Cote;
