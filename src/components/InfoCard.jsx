import { useEffect, useState } from "react";
import "./InfoCard.css";
import "./GridCard.css";
import { TYPES_COLORS } from "../constants";

function InfoCard({ URL, pokemonName, onClose }) {

  return (
    <>
        <div className="info-card">
            <button className="close">
              x
            </button>
            <div className="img-panel">
              <div className="bg-ring"></div>
              <h3>Charizard</h3>
              <div className='types'>
                  <span style={{backgroundColor: TYPES_COLORS['fire']}}>
                      Fire
                  </span>
                  <span style={{ backgroundColor: TYPES_COLORS['flying'] }}>
                      Flying
                  </span>
              </div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"></img>
            </div>
            
            <div className="info-panel">
              <div className="info">
                <p>Height<br/>
                  <span>1.7m</span>
                </p>
                <p>Mass<br/>
                  <span>90.5kg</span>
                </p>
              </div>
              
              <div className="stats">
                <h5>Stats</h5>
                <div className="stat-item">
                  <span className="stat-name">HP</span>
                  <div className="stat-bar">
                    <div className="stat-value" style={{"--value":"80%"}}></div>
                  </div>
                  <span className="stat-num">80</span>
                </div>

                <div className="stat-item">
                  <span className="stat-name">HP</span>
                  <div className="stat-bar">
                    <div className="stat-value" style={{"--value":"80%"}}></div>
                  </div>
                  <span className="stat-num">80</span>
                </div>

                <div className="stat-item">
                  <span className="stat-name">HP</span>
                  <div className="stat-bar">
                    <div className="stat-value" style={{"--value":"80%"}}></div>
                  </div>
                  <span className="stat-num">80</span>
                </div>

                <div className="stat-item">
                  <span className="stat-name">HP</span>
                  <div className="stat-bar">
                    <div className="stat-value" style={{"--value":"76%"}}></div>
                  </div>
                  <span className="stat-num">80</span>
                </div>

                <div className="stat-item">
                  <span className="stat-name">HP</span>
                  <div className="stat-bar">
                    <div className="stat-value" style={{"--value":"25%"}}></div>
                  </div>
                  <span className="stat-num">80</span>
                </div>

              </div>
            </div>
        </div>
    </>
  );
}

export default InfoCard;