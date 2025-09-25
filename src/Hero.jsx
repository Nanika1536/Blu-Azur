import React from "react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('Image_de_Fond.jpg')" }}>
            <div className="absolute inset-0 bg-black/50" />
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center text-white px-4">
                    <nav>
                        <img src="" alt="" className="logo" />
                        <div className="menu">
                            <ul>
                                <li className="lien">
                                    <a href="" className="propos">À propos</a>
                                </li>
                                <li className="lien">
                                    <a href="" className="localisation">Localisation</a>
                                </li>
                                <li className="lien">
                                    <a href="" className="activite">ACtivités</a>
                                    
                                </li>
                                <li className="lien">
                                    <button className="reserver">Réservé</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Votre évasion sur la côte d'Azur
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                    Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d'exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d'un séjour alliant confort, sérénité et élégance au cour de la Riviera française !
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 py-4 text-lg transition">
                    Réservez maintenant
                    </button>
                    <div className="reseau">
                        <ul>
                            <li className="reseaux">
                                <a href="" className="fb">
                                    <img src="" alt="" className="fb" />
                                </a>
                            </li>
                            <li className="reseaux">
                                <a href="" className="yt">
                                    <img src="" alt="" className="youtube" />
                                </a>
                            </li>
                            <li className="reseaux">
                                <a href="" className="tw">
                                    <img src="" alt="" className="twiter" />
                                </a>
                            </li>
                            <li className="reseaux">
                                <a href="" className="insta">
                                    <img src="" alt="" className="intagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
        </section>
    );
}

export default Hero