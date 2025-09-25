import React from "react";
import { motion } from "framer-motion";

function Maps() {
    return (
        <div 
    className="Maps relative h-[90vh] flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('Plan_image_de_fond.png')" }}>
            <h1 className="blu">
                Où se trouve Blu Azur à
            </h1>
            <h1 className="saint">
                Saint-Raphaël ?
            </h1>
            <p className="azur">
                Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
            </p>
            <button className="rendre">
                Comment s’y rendre ?
            </button>
            <img src="Maps.png" alt="" className="plan" />
            <img src="Plan_premier_plan.png" alt="" className="maps" />
        </div>
    );
}

export default Maps