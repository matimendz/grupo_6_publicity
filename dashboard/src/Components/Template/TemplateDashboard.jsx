import React from "react";

import Cantidad from "../ejemploPanel/Cantidad";
import Header from "../Header/Header";
import UltimoProducto from "../UltimoProducto/UltimoProducto";
import panelTotales from "../panelTotales/panelTotales";
import './TemplateDashboard.css'
function TemplateDashboard(){
    return(
        <div className="principal">
            <div className="cabecera">
                <Header/>
            </div>
            <div className="cuerpo">
                
                <Cantidad/>
                <UltimoProducto/>
                <panelTotales/>
            </div>
        </div>
    )
}

export default TemplateDashboard;