import React from "react";
import { motion } from "framer-motion";

function Presfooter() {
  const cards = [
    {
      img: "1.png",
      title: "Un patrimoine culturel d’exception",
      text: "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
      linkText: "Le Festival de Cannes, Carnaval de Nice, Fête du Citron",
      linkUrl: "#",
    },
    {
      img: "2.png",
      title: "Le sport au rythme de la Méditerranée",
      text: "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.",
      linkText: "Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez",
      linkUrl: "#",
    },
    {
      img: "3.png",
      title: "Une destination gourmande et authentique",
      text: "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
      buttonText: "Consulter la liste des meilleurs restaurants",
    },
    {
      img: "4.png",
      title: "Des expériences inoubliables en famille",
      text: "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.",
    },
    {
      img: "5.png",
      title: "L’évasion en pleine nature",
      text: "Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
      linkText: "Grand Canyon du Verdon",
      buttonText: "Consulter la liste des sentiers pédestres",
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg flex flex-col justify-end p-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${card.img})` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm md:text-base mb-4">{card.text}</p>
              {card.linkText && (
                <p className="text-sm mb-2">
                  À voir:{" "}
                  <a href={card.linkUrl || "#"} className="underline hover:text-blue-300">
                    {card.linkText}
                  </a>
                </p>
              )}
              {card.buttonText && (
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition">
                  {card.buttonText}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Presfooter;
