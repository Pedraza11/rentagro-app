// src/components/Home/Home.js
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Importa elementos de React Router
import UserDashboard from '../Dashboard/UserDashboard'; // Importa el Dashboard de Usuarios
import styles from './Home.module.css'; // Estilos para el Home

const Home = () => {
    const [activeSection, setActiveSection] = useState('dashboard'); // Estado para la sección activa

    return (
        <div className={styles.homeContainer}>
            <header className={styles.header}>
                <h1 className={styles.logo}>SACOOP Admin</h1>
                <nav className={styles.nav}>
                    {/* Enlaces de navegación */}
                    <Link
                        to="/home/dashboard"
                        className={`${styles.navLink} ${activeSection === 'dashboard' ? styles.active : ''}`}
                        onClick={() => setActiveSection('dashboard')}
                    >
                        Gestión de Usuarios
                    </Link>
                    {/* Aquí podrías añadir más enlaces a futuras secciones */}
                    <Link
                        to="/home/settings"
                        className={`${styles.navLink} ${activeSection === 'settings' ? styles.active : ''}`}
                        onClick={() => setActiveSection('settings')}
                    >
                        Configuración (Próximamente)
                    </Link>
                     <Link
                        to="/login" // Enlace para volver al login o cerrar sesión
                        className={styles.logoutButton}
                    >
                        Cerrar Sesión
                    </Link>
                </nav>
            </header>

            <main className={styles.mainContent}>
                {/* Aquí se renderizarán las rutas anidadas */}
                <Routes>
                    <Route path="dashboard" element={<UserDashboard />} />
                    {/* Podrías tener una sección de "Bienvenida" por defecto */}
                    <Route path="/" element={
                        <div className={styles.welcomeSection}>
                            <h2>¡Bienvenido al Panel de Administración de SACOOP!</h2>
                            <p>Selecciona una opción del menú para comenzar a gestionar.</p>
                        </div>
                    } />
                    {/* Ruta para "Configuración" (simulada) */}
                    <Route path="settings" element={
                        <div className={styles.sectionPlaceholder}>
                            <h2>Sección de Configuración</h2>
                            <p>Aquí se gestionarán los ajustes de la plataforma.</p>
                        </div>
                    } />
                    {/* Ruta por defecto para 404 dentro de /home */}
                    <Route path="*" element={
                        <div className={styles.sectionPlaceholder}>
                            <h2>Página no encontrada</h2>
                            <p>La sección a la que intentas acceder no existe.</p>
                        </div>
                    } />
                </Routes>
            </main>
        </div>
    );
};

export default Home;