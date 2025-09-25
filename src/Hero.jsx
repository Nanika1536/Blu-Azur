import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center"
      style={{ backgroundImage: "url('Image_de_Fond.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* navbar */}
      <nav className="w-full absolute top-0 left-0 z-20 inline">
        <div className="container mx-auto flex items-center justify-between h-[80px] px-6">
          <div className="text-white text-2xl font-bold">BluAzur</div>
            <ul className="flex space-x-8 items-center">
            <li>
                <a
                href="#about"
                className="relative text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                À propos
                </a>
            </li>
            <li>
                <a
                href="#localisation"
                className="relative text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                Localisation
                </a>
            </li>
            <li>
                <a
                href="#activites"
                className="relative text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                Activités
                </a>
            </li>
            <li>
                <button className="bg-blue-300 hover:bg-blue-400 text-white px-4 py-2 rounded-full transition">
                Réserver
                </button>
            </li>
            </ul>
        </div>
      </nav>

      {/* contenu hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white px-4 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Votre évasion <br />
          <span className="text-xl md:text-2xl font-light">
            sur la côte d'Azur
          </span>
        </h1>

        <p className="text-md md:text-lg max-w-xl mx-auto mb-6">
          Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
          destination d'exception nichée entre Cannes et Saint-Tropez. Nos
          appartements tout équipés, situés dans un domaine privé sécurisé,
          offrent un cadre verdoyant et paisible, à quelques pas de la marina de
          Santa Lucia, des plages de sable fin et du centre-ville animé.
        </p>

        <button className="hover:bg-blue-100/50 text-white rounded-full border-[2px] border-white px-8 py-4 text-lg transition">
          Réservez maintenant votre séjour!
        </button>
      </motion.div>

      {/* sidebar réseaux sociaux */}
      <div className="w-[40px] h-screen absolute top-1/3 z-10 bg-blue-100/50">
        <ul className="flex flex-col space-y-12">
          <li>
            <a href="#">
              <img src="Facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="Twiter.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="Instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>

      {/* carrousel image droite */}
      <div className="absolute bottom-10 right-10 z-10">
        <img
          src="residance_pierre.png"
          alt="Résidence"
          className="w-[320px] rounded-md shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
