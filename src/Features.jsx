import React from "react";
import { motion } from "framer-motion";

function Features() {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-gray-800"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Le confort et la sérénité d'un appartement privé
          </h1>
          <p className="text-lg mb-6">
            Blu Azur vous propose des appartements élégants et spacieux,
            conçus pour accueillir de 2 à 6 personnes. Offrant un cadre
            confortable et moderne, ils sont parfaits pour une escapade détente
            ou un séjour prolongé.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Les inclusions :</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Stationnement privé</li>
            <li>Piscine extérieure avec chaises longues</li>
            <li>Linge de lit et serviettes</li>
            <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
            <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
            <li>
              Kit bébé : comprend un lit parapluie avec un vrai matelas et une
              chaise haute
            </li>
            <li>
              Autres commodités en prêt à la réception : jeux de société, livres,
              raquettes et balles de ping-pong, sèche-cheveux, fer et planche à
              repasser, adaptateur pour les prises étrangères et cache-prises
              pour les enfants.
            </li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="Salon.png"
            alt="Salon BluAzur"
            className="rounded-xl shadow-lg max-w-md w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Features;