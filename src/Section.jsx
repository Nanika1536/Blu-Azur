import React from "react";
import { motion } from "framer-motion";

function Section() {
    return (
        <div className="Section">
            {/* h1 */}
            <h1 className="Raphaelh1">
                Saint Raphaël, l’endroit parfait pour vivre la Côte d’Azur
            </h1>
            {/* p */}
            <p className="Raphaelp">
                Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.
            </p>
            {/* img batteau */}
            <img src="Bateau1.png" alt="" className="sectionimg batteau" />
            {/* p */}
            <p className="batteaup">
                Sports nautiques,plongée, voile
            </p>
            {/* img Velo */}
            <img src="Velo2.png" alt="" className="sectionimg velo" />
            {/* p */}
            <p className="velop">
                Randonnées et vélo dans l’Estérel
            </p>
            {/* img Casino */}
            <img src="Casino3.png" alt="" className="sectionimg casino" />
            {/* p */}
            <p className="casinop">
                Casino et vie nocturne animée
            </p>
            {/* img Village */}
            <img src="Village4.png" alt="" className="sectionimg village" />
            {/* p */}
            <p className="villagep">
                Villages perchés et marchés provençaux
            </p>
            {/* img Golf */}
            <img src="Golf5.png" alt="" className="sectionimg golf" />
            {/* p */}
            <p className="golfp">
                Un paradis pour les golfeurs 
            </p>
            {/* img Montagne */}
            <img src="Montagne6.png" alt="" className="sectionimg montagne" />
            {/* p */}
            <p className="montagnep">
                Montagne et vélo de route
            </p>
            {/* conclusion */}
            <p className="conclusion">
                Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !
            </p>
        </div>
    );
}

export default Section
