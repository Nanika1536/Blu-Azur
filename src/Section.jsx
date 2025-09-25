import React from "react";
import { motion } from "framer-motion";

function Section() {
    return (
        <section
            className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundColor: "white" }}>
            <div className="absolute inset-0 bg-black/50" />
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center text-white px-4">
                    <h1 className="confort">
                        Le confort et la sérénité d'un appartient privé
                    </h1>
                    <p className="offre">
                        Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                    </p>
                    <h2 className="inclusion">
                        Les inclusions:
                    </h2>
                    <ul className="liste">
                        <li className="litseli">
                            Stationnement privé
                        </li>
                        <li className="litseli">
                            Piscine extérieure ovec chaises longues
                        </li>
                        <li className="litseli">
                            Linge de lit et serviettes
                        </li>
                        <li className="litseli">
                            Télévision, téléphone et Wi-Fi (accès au salon)
                        </li>
                        <li className="litseli">
                            Réfrigérateur, cuisinière, lave-vaisselle, vaisselle
                        </li>
                        <li className="litseli">
                            Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute
                        </li>
                        <li className="litseli">
                            Autres commodités en prêt à la réception: jeux de société, livres. raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.
                        </li>
                    </ul>
                    <img src="Salon.png" alt="" className="salon" />
                </motion.div>
        </section>
    );
}

export default Section;