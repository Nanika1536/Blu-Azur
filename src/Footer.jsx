import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full">
      {/* Section Réservation */}
      <motion.div
        className="relative w-full bg-cover bg-center text-white py-20 px-6"
        style={{ backgroundImage: "url('Dernier_image_de_fond.png')" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-3xl font-bold mb-4">Réservations</h3>
          <p className="mb-6">
            Offrez-vous un séjour inoubliable dans l’un de nos appartements Blu
            Azur. Profitez d’un cadre exceptionnel, entre confort, détente et
            découvertes, au cœur de Saint-Raphaël.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition">
            Réservez dès maintenant votre séjour !
          </button>
        </div>
      </motion.div>

      {/* Section Contact */}
      <div className="bg-blue-400 text-white py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <img src="Logo.png" alt="BluAzur Logo" className="w-32 md:w-40" />

          {/* Contact */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src="Email.png" alt="Email" className="w-6 h-6" />
                <p>info@bluazur.com</p>
              </li>
              <li className="flex items-center gap-3">
                <img src="Telephone.png" alt="Téléphone" className="w-6 h-6" />
                <p>+1 555 555-5555</p>
              </li>
              <li className="flex items-center gap-3">
                <img src="Facebook2.png" alt="Facebook" className="w-6 h-6" />
                <p>@ BLU Azur</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bas */}
      <div className="bg-blue-900 text-white text-center py-4 text-sm">
        © Tous droits réservés à Blu Azur
      </div>
    </footer>
  );
}

export default Footer;
