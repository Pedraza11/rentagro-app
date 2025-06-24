// src/components/LoginScreen/LoginScreen.js
import React, { useState } from 'react';
import styles from './LoginScreen.module.css';

// Añade `onLoginSuccess` como prop para notificar al padre sobre el éxito del login
const LoginScreen = ({ onLoginSuccess }) => {
    // Estados para los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Estado para mensajes de error
    const [error, setError] = useState('');
    // Estado para el mensaje de contraseña restablecida (para simulación)
    const [showPasswordResetMessage, setShowPasswordResetMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar página)
        setError(''); // Limpia errores previos al nuevo intento
        setShowPasswordResetMessage(false); // Limpia mensaje de reseteo previo

        // --- Validaciones Frontend ---
        // Estas validaciones son para mejorar la experiencia del usuario.
        // Las validaciones de seguridad y existencia (usuario/contraseña) SIEMPRE deben hacerse en el backend.

        // 1. Validación de formato de correo electrónico
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, introduce un correo electrónico válido.');
            return; // Detiene la ejecución si hay un error
        }

        // 2. Validación de contraseña (cumple con requisitos mínimos de seguridad para la simulación)
        // En un caso real, esto sería mucho más robusto.
        if (password.length < 5 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            setError('La contraseña debe tener más de 4 caracteres, al menos una mayúscula y un número.');
            return;
        }

        // --- Simulación de la lógica de autenticación del Backend ---
        // En un proyecto real, aquí harías una llamada a tu API (ej. con fetch o axios)
        // fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         // Redirigir o guardar token
        //         console.log('Inicio de sesión exitoso:', data);
        //         if (onLoginSuccess) {
        //             onLoginSuccess(); // Llama a la prop si el login fue exitoso en el backend
        //         }
        //     } else {
        //         setError(data.message || 'Error al iniciar sesión.');
        //     }
        // })
        // .catch(err => setError('Error de conexión. Intenta de nuevo más tarde.'));

        // --- Simulaciones para los criterios de aceptación específicos del ejercicio ---
        if (email === 'usuario.suspendido@rentagro.com') {
            setError('Tu cuenta ha sido suspendida o desactivada. Por favor, contacta a soporte.');
            return;
        }

        if (email === 'contrasena.forzada@rentagro.com') {
            setShowPasswordResetMessage(true);
            setError('Tu contraseña ha sido restablecida forzosamente. Por favor, revisa tu casilla de correo.');
            return;
        }

        // Si todas las validaciones y simulaciones pasan, ¡éxito!
        console.log('Inicio de sesión exitoso (simulado) para:', email);
        // Puedes mantener o quitar el alert, ya que la redirección lo hará menos necesario
        // alert('Inicio de sesión exitoso (simulado)!'); 
        
        // Llama a la función `onLoginSuccess` que viene de `App.js`
        // Esto notifica al componente padre que la autenticación fue exitosa
        if (onLoginSuccess) {
            onLoginSuccess(); 
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Bienvenido a RentAgro</h1>
                <p className={styles.subtitle}>Gestión Agrícola Simplificada</p>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu.correo@rentagro.com"
                            required
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Introduce tu contraseña"
                            required
                            className={styles.inputField}
                        />
                    </div>

                    {/* Mostrar mensaje de error si existe */}
                    {error && <p className={styles.errorMessage}>{error}</p>}
                    
                    {/* Mostrar mensaje de contraseña restablecida si aplica */}
                    {showPasswordResetMessage && (
                        <p className={styles.infoMessage}>
                            ¡Atención! Tu contraseña ha sido reestablecida. Revisa tu correo.
                        </p>
                    )}

                    <button type="submit" className={styles.loginButton}>
                        Iniciar Sesión
                    </button>
                </form>

                <div className={styles.footerLinks}>
                    <button
                        type="button"
                        className={styles.link}
                        style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => {/* Aquí puedes manejar el evento de olvido de contraseña */}}
                    >
                        ¿Olvidaste tu contraseña?
                    </button>
                 
 
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;