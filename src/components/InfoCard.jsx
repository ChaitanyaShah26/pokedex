import { useEffect, useState } from "react";
import "./InfoCard.css";
import { TYPES_COLORS } from "../constants";

function InfoCard({ URL, pokemonName, onClose }) {

  return (
    <>
        <div className="info-card">
            <h3>{pokemonName}</h3>
        </div>
    </>
  );
}

export default InfoCard;