import React from "react";
import { motion } from "framer-motion";

function Footer() {
    return (
        <div className="Footer">
            <div className="premier" style={{ backgroundImage: "url('Dernier_image_de_fond.png')" }}> 
                <h3 className="Reservation">
                    Réservations
                </h3>
                <p className="reservation">
                    Offrez-vous un séjour inoubliable dans l’un de nos appartements Blu Azur. Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
                </p>
                <button className="reserver">
                    Réservez dès maintenant votre séjour !
                </button>
            </div>
            <div className="deuxieme" style={{ backgroundColor: "#4097FF" }}>
                <img src="Logo.png" alt="" className="logo" />
                <div className="contact">
                    <h3 className="Contact">
                        Contactez-nous
                    </h3>
                    <ul>
                    <li className="Contact">
                        <img src="Email.png" alt="" className="mail" />
                        <p className="mail p">
                            info@bluazur.com
                        </p>
                    </li>
                    <li className="Contact">
                        <img src="Telephone.png" alt="" className="telephonep" />
                        <p className="telephonep">
                            +1 555 555-5555
                        </p>
                    </li>
                    <li className="Contact">
                        <img src="Facebook2.png" alt="" className="facebookimg" />
                        <p className="mail p">
                            @ BLU Azur
                        </p>
                    </li>
                    </ul>    
                </div>
                <div className="fin" style={{ backgroundColor: "#2161AE" }}>
                    © Tous droits réservés à Blu Azur
                </div>
            </div>
                
        </div>
    );
}

export default Footer