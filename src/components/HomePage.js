import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.css';

export const HomePage = () => {
    return (
        <section class="home-page-container">
            <div class="home-page-container__card">
                <div className="card__title">
                    <h4>Bienvenido a la aplicación para el reporte de PQR!</h4>
                    <p>Aquí podrá registrar solicitudes de tipo petición, Queja o Reclamo, y además podrá consultar en cualquier momento las diferentes solicitudes ingresadas previamente.</p>
                </div>
                <div className="card__buttons">
                    <Link to="/new-request" className="button">
                        <i class="fas fa-plus-circle"></i>
                        <h3>Nueva Solicitud</h3>
                    </Link>
                    <Link to="/list-requests" className="button">
                        <i class="fas fa-list"></i>
                        <h3>Visualizar Solicitudes</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
}
