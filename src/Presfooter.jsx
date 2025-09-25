import React from "react";
import { motion } from "framer-motion";

function Presfooter() {
    return (
        <div
        className="Presfooter relative h-[90vh] flex items-center justify-center bg-cover bg-center" >
            <div className="cultire" style={{ backgroundImage: "url('1.png')" }}>
                <h3 className="cultureh3">
                    Un patrimoine culturel d’exception
                </h3>
                <p className="culturep">
                    De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.
                </p>
                <p className="voir">
                    À voir:
                    <a href="" className="voira">
                         Le Festival de Cannes, Carnaval de Nice, Fête du Citron
                    </a>
                </p>
            </div>
            <div className="sport" style={{ backgroundImage: "url('2.png')" }}>
                <h3 className="sporth3">
                    Le sport au rythme de la Méditerranée
                </h3>
                <p className="stportp">
                    Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline. 
                </p>
                <p className="voir">
                    À voir:
                    <a href="" className="voira">
                         Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez
                    </a>
                </p>
            </div>
            <div className="destination" style={{ backgroundImage: "url('3.png')" }}>
                <h3 className="destinationh3">
                    Une destination gourmande et authentique
                </h3>
                <p className="destinationp">
                    De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.
                </p>
                <button className="destinationbu">
                    Consulter la liste des meilleurs restaurants
                </button>
            </div>
            <div className="inoubliable" style={{ backgroundImage: "url('4.png')" }}>
                <h3 className="inoubliableh3">
                    Des expériences inoubliables en famille
                </h3>
                <p className="inoubliablep">
                    Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.
                </p>
            </div>
            <div className="nature" style={{ backgroundImage: "url('5.png')" }}>
                <h3 className="natureh3">
                    L’évasion en pleine nature
                </h3>
                <p className="natturep">
                    Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.
                </p>
                <p className="voir2">
                    À voir: Grand Canyon du Verdon
                </p>
                <button className="liste">
                    Consulter la liste des sentiers pédestres
                </button>
            </div>
        </div>
    );
}

export default Presfooter