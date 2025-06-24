
import React from 'react';
import styles from './UserDetailModal.module.css';

const UserDetailModal = ({ user, onClose }) => {
    if (!user) return null; // No renderiza si no hay usuario

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2 className={styles.modalTitle}>Detalles del Usuario</h2>
                
                <div className={styles.detailGrid}>
                    <div className={styles.detailItem}>
                        <strong>Nombre Completo:</strong>
                        <span>{user.fullName}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Correo Electrónico:</strong>
                        <span>{user.email}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Rol:</strong>
                        <span>{user.role}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Estado:</strong>
                        <span className={`${styles.statusBadge} ${styles[user.status.toLowerCase()]}`}>
                            {user.status}
                        </span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>ID de Contrato:</strong>
                        <span>{user.contractId || 'N/A'}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Fin de Contrato:</strong>
                        <span>{user.contractEndDate || 'N/A'}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Teléfono:</strong>
                        <span>{user.phone || 'N/A'}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Dirección:</strong>
                        <span>{user.address || 'N/A'}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Último Acceso:</strong>
                        <span>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'N/A'}</span>
                    </div>
                     <div className={styles.detailItem}>
                        <strong>Fecha de Registro:</strong>
                        <span>{user.registrationDate ? new Date(user.registrationDate).toLocaleDateString() : 'N/A'}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Estado de Cuotas:</strong>
                        <span>{user.quotaStatus || 'N/A'}</span>
                    </div>
                    <div className={styles.detailItem}>
                        <strong>Billetera Quintales:</strong>
                        <span>{user.quintalWallet || 'N/A'}</span>
                    </div>
                    <div className={styles.detailItemFull}>
                        <strong>Notas:</strong>
                        <p>{user.notes || 'No hay notas adicionales.'}</p>
                    </div>
                </div>

                <div className={styles.modalActions}>
                    <button className={styles.editButton}>Editar Usuario</button>
                    <button className={styles.deleteButton}>Eliminar Usuario</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetailModal;