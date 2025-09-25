import React from "react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
        <div className="absolute inset-0 bg-black/50" />
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-4"
            >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Séjournez au cœur de la Côte d’Azur
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Des appartements élégants et confortables à Saint-Raphaël, pour des
            vacances inoubliables.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 py-4 text-lg transition">
            Réservez maintenant
            </button>
            </motion.div>
        </section>
    );
}

export default Hero