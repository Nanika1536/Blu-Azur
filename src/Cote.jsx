import React from "react";
import { motion } from "framer-motion";

function Cote() {
    return (
        <div 
    className="Maps relative h-[90vh] flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('image_fond_cote.png')" }}>
            <img src="image_dans_cote.png" alt="" className="cote" />
            <h2 className="coteh2">
                Un point de départ idéal pour découvrir la Côte d’Azur !
            </h2>
            <p className="cotep">
                Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
            </p>
        </div>
    );
}

export default Cote