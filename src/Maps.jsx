import React from "react";
import { motion } from "framer-motion";

function Maps() {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('Plan_image_de_fond.png')" }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Où se trouve Blu Azur à{" "}
          <span className="block text-blue-300">Saint-Raphaël ?</span>
        </motion.h1>

        {/* Texte */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white text-lg leading-relaxed mb-8"
        >
          Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur
          de l’une des plus belles stations balnéaires de France. Nos
          appartements se trouvent dans un domaine privé sécurisé, entouré de
          verdure, à quelques minutes à pied de la plage sablonneuse de Santa
          Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la
          résidence permet un accès facile aux boutiques, restaurants et
          animations locales. Une station d’arrêt d’autobus est située à la
          sortie du site, et une boulangerie à proximité vous offre du pain
          frais chaque matin.
        </motion.p>

        {/* Bouton */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl shadow-md transition mb-10"
        >
          Comment s’y rendre ?
        </motion.button>

        {/* Images Maps superposées */}
        <div className="relative w-full flex justify-center">
          <motion.img
            src="Maps.png"
            alt="Plan"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-[140px] max-w-full rounded-lg shadow-lg"
          />
          <motion.img
            src="Plan_premier_plan.png"
            alt="Localisation"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-[-30px] right-10 w-[200px] max-w-[40%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Maps;
