// src/components/UserRegistration/UserRegistrationForm.js
import React, { useState } from 'react';
import styles from './UserRegistrationForm.module.css';
import mockUsers from '../../data/mockUsers'; // Para simular la unicidad
import { FaUserPlus, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        documentNumber: '', // DNI/CUIT
        role: '', // 'arrendador' o 'arrendatario'
        email: '',
        phoneNumber: '' // Opcional
    });
    const [feedbackMessage, setFeedbackMessage] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        setFeedbackMessage({ type: '', message: '' }); // Limpiar mensajes previos

        const { fullName, documentNumber, role, email } = formData;

        if (!fullName || !documentNumber || !role || !email) {
            setFeedbackMessage({ type: 'error', message: 'Por favor, completa todos los campos obligatorios (*).' });
            return false;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setFeedbackMessage({ type: 'error', message: 'Por favor, ingresa un correo electrónico válido.' });
            return false;
        }

        // Simular validación de unicidad de DNI/CUIT y Correo Electrónico
        const isDocumentTaken = mockUsers.some(user => user.documentNumber === documentNumber);
        const isEmailTaken = mockUsers.some(user => user.email === email);

        if (isDocumentTaken) {
            setFeedbackMessage({ type: 'error', message: 'El número de documento (DNI/CUIT) ya está registrado.' });
            return false;
        }

        if (isEmailTaken) {
            setFeedbackMessage({ type: 'error', message: 'El correo electrónico ya está registrado.' });
            return false;
        }

        return true;
    };

    const generateRandomPassword = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < 10; i++) { // Contraseña de 10 caracteres
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setFeedbackMessage({ type: '', message: '' }); // Limpiar mensajes mientras carga

        // Simular llamada a API para registro (async)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simula un retardo de red

            const newPassword = generateRandomPassword();
            const newUser = {
                id: `user${mockUsers.length + 1}`, // ID simple basado en el tamaño del array
                ...formData,
                password: newPassword, // En una app real, esto sería hasheado antes de guardar
                createdAt: new Date().toISOString()
            };

            // En una aplicación real, aquí enviarías `newUser` a tu backend
            // y el backend manejaría el guardado y el envío de correo.

            // Para simulación, lo agregamos a mockUsers (solo en memoria para esta sesión)
            mockUsers.push(newUser); 
            console.log('Nuevo usuario registrado (simulado):', newUser);
            console.log('Todos los usuarios (simulados) actuales:', mockUsers);

            setFeedbackMessage({ 
                type: 'success', 
                message: `Usuario '${newUser.fullName}' registrado con éxito. Contraseña inicial generada: '${newPassword}'. (Simulado: la contraseña real se enviaría por correo a ${newUser.email})` 
            });

            // Limpiar el formulario después del envío exitoso
            setFormData({
                fullName: '',
                documentNumber: '',
                role: '',
                email: '',
                phoneNumber: ''
            });

        } catch (error) {
            console.error('Error al registrar usuario (simulado):', error);
            setFeedbackMessage({ type: 'error', message: 'Error al registrar usuario. Inténtalo de nuevo.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}><FaUserPlus className={styles.headerIcon} /> Registro de Nuevo Usuario</h1>
            <p className={styles.subtitle}>Completa los datos para dar de alta un nuevo usuario en el sistema.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="fullName">Nombre Completo *</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={styles.inputField}
                        placeholder="Ej: Juan Pérez"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="documentNumber">Número de Documento (DNI/CUIT) *</label>
                    <input
                        type="text"
                        id="documentNumber"
                        name="documentNumber"
                        value={formData.documentNumber}
                        onChange={handleChange}
                        className={styles.inputField}
                        placeholder="Ej: 20-12345678-9"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="role">Rol *</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={styles.selectField}
                        required
                    >
                        <option value="">Selecciona un rol</option>
                        <option value="arrendador">Arrendador</option>
                        <option value="arrendatario">Arrendatario</option>
                        {/* Puedes añadir más roles si es necesario: <option value="admin">Administrador</option> */}
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Correo Electrónico *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.inputField}
                        placeholder="Ej: usuario@example.com"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="phoneNumber">Número de Teléfono (Opcional)</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={styles.inputField}
                        placeholder="Ej: +54 9 351 1234567"
                    />
                </div>

                {feedbackMessage.message && (
                    <div className={`${styles.feedback} ${styles[feedbackMessage.type]}`}>
                        {feedbackMessage.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                        <p>{feedbackMessage.message}</p>
                    </div>
                )}

                <button type="submit" className={styles.submitButton} disabled={isLoading}>
                    {isLoading ? 'Registrando...' : 'Registrar Usuario'}
                </button>
            </form>
        </div>
    );
};

export default UserRegistrationForm;