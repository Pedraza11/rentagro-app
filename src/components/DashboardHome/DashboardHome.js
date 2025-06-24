// src/components/DashboardHome/DashboardHome.js
import React from 'react';
// import { Link } from 'react-router-dom'; // Asegúrate de que esta línea esté comentada o eliminada
import styles from './DashboardHome.module.css';
import { FaUsers, FaFileContract, FaUserPlus, FaCog } from 'react-icons/fa';



const DashboardHome = () => {
    // Definimos las tarjetas de navegación
    const cards = [
        {
            title: 'Gestión de Usuarios',
            description: 'Administra los perfiles de arrendadores y arrendatarios.',
            icon: <FaUsers />,
            path: 'componentes/Dashboard/userDashboard' // Ajusta la ruta según tu configuración de rutas
        },
        {
            title: 'Mis Contratos',
            description: 'Visualiza y gestiona tus contratos de arrendamiento.',
            icon: <FaFileContract />,
            path: '/home/contracts'
        },
        {
            title: 'Registro de Usuarios',
            description: 'Crea nuevas cuentas de usuario para el sistema.',
            icon: <FaUserPlus />,
            path: '/home/register-user'
        }
       
    ];

    return (
        <div className={styles.fullScreenContainer}>
            <nav className={styles.navbar}>
                <div className={styles.navbarLogo}>
                    {/* UTILIZA LA IMAGEN DE LOGO AQUÍ */}
                    
                </div>
                {/* Puedes añadir más elementos al navbar aquí si lo deseas */}
            </nav>

            <div className={styles.dashboardHomeContainer}>
                <h1 className={styles.welcomeHeader}>Bienvenido al Panel de Administración de RentAgro</h1>
                <p className={styles.introText}>Selecciona una opción para comenzar a gestionar la plataforma.</p>

                <div className={styles.cardsGrid}>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={styles.cardLink}
                            onClick={() => console.log(`Clic simulado en: ${card.title} - Ruta: ${card.path}`)}
                        >
                            <div className={styles.card}>
                                <div className={styles.cardIcon}>{card.icon}</div>
                                <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;