import React from "react";
import "./curator.scss";
import curatorPhoto from '../../images/perfil.svg'

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Guilherme Rodrigues" />
            </div>
            <div className="curator__datails">
                <h3>Guilherme Rodrigues</h3>
                <h6>Curadoria</h6>
                <p>Desenvolvedor web desde 2008, atualmente Tech Lead na Dasa e professor de Front-end na EBAC.</p>
            </div>
        </div>
    )
}

export default CuratorItem;