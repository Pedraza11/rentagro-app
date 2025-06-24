
import React, { useState, useEffect, useMemo } from 'react';
import styles from './UserDashboard.module.css';
import mockUsers from '../../data/mockUsers'; 
import UserDetailModal from './UserDetailModal'; 

const USERS_PER_PAGE = 10; 

const UserDashboard = () => {
    const [users, setUsers] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('Todos'); 
    const [groupByContract, setGroupByContract] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState(null); 

   
    useEffect(() => {
        
        setUsers(mockUsers);
    }, []);

    
    const filteredAndSortedUsers = useMemo(() => {
        let currentUsers = [...users]; 

        
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            currentUsers = currentUsers.filter(user =>
                user.fullName.toLowerCase().includes(lowerCaseSearchTerm) ||
                user.email.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        
        if (filterRole !== 'Todos') {
            currentUsers = currentUsers.filter(user => user.role === filterRole);
        }

        
        if (!groupByContract) {
            
            currentUsers.sort((a, b) => {
                const dateA = new Date(a.contractEndDate);
                const dateB = new Date(b.contractEndDate);
                const now = new Date();

                const isAEpired = dateA < now;
                const isBEpired = dateB < now;

                if (isAEpired && !isBEpired) return 1;
                if (!isAEpired && isBEpired) return -1; 

                return dateA.getTime() - dateB.getTime();
            });
        }

        return currentUsers;
    }, [users, searchTerm, filterRole, groupByContract]);

    
    const totalPages = Math.ceil(filteredAndSortedUsers.length / USERS_PER_PAGE);
    const paginatedUsers = filteredAndSortedUsers.slice(
        (currentPage - 1) * USERS_PER_PAGE,
        currentPage * USERS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    
    const groupedUsers = useMemo(() => {
        if (!groupByContract) return null;

        const groups = {};
        paginatedUsers.forEach(user => {
            const contractKey = user.contractId || 'Sin Contrato';
            if (!groups[contractKey]) {
                groups[contractKey] = [];
            }
            groups[contractKey].push(user);
        });

        
        return Object.keys(groups).sort().map(key => ({
            contractId: key,
            users: groups[key].sort((a,b) => a.fullName.localeCompare(b.fullName)) // Ordenar usuarios dentro del grupo por nombre
        }));
    }, [paginatedUsers, groupByContract]);

    
    const handleViewDetails = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.dashboardTitle}>Gestión de Usuarios SACOOP</h1>

            <div className={styles.controls}>
                <div className={styles.searchFilterGroup}>
                    <input
                        type="text"
                        placeholder="Buscar por nombre o correo..."
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // Resetear a la primera página al buscar
                        }}
                    />
                    <select
                        className={styles.filterSelect}
                        value={filterRole}
                        onChange={(e) => {
                            setFilterRole(e.target.value);
                            setCurrentPage(1); 
                        }}
                    >
                        <option value="Todos">Todos los Roles</option>
                        <option value="Arrendador">Arrendador</option>
                        <option value="Arrendatario">Arrendatario</option>
                    </select>
                </div>

                <div className={styles.viewToggle}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={groupByContract}
                            onChange={() => setGroupByContract(!groupByContract)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                    <span>Agrupar por Contrato</span>
                </div>
            </div>

            {users.length === 0 ? (
                <p className={styles.loadingMessage}>Cargando usuarios...</p>
            ) : filteredAndSortedUsers.length === 0 ? (
                <p className={styles.noResultsMessage}>No se encontraron usuarios con los criterios de búsqueda.</p>
            ) : (
                <>
                    {groupByContract ? (
                        <div className={styles.groupedList}>
                            {groupedUsers.map(group => (
                                <div key={group.contractId} className={styles.contractGroup}>
                                    <h3 className={styles.contractTitle}>Contrato: {group.contractId}</h3>
                                    <div className={styles.userGrid}>
                                        {group.users.map(user => (
                                            <div key={user.id} className={styles.userCard} onClick={() => handleViewDetails(user)}>
                                                <h4>{user.fullName}</h4>
                                                <p>{user.role}</p>
                                                <p className={styles.emailText}>{user.email}</p>
                                                <span className={`${styles.statusBadge} ${styles[user.status.toLowerCase()]}`}>
                                                    {user.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <table className={styles.userTable}>
                            <thead>
                                <tr>
                                    <th>Nombre Completo</th>
                                    <th>Rol</th>
                                    <th>Correo Electrónico</th>
                                    <th>Estado</th>
                                    <th>Fin Contrato</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.fullName}</td>
                                        <td>{user.role}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[user.status.toLowerCase()]}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>{user.contractEndDate || 'N/A'}</td>
                                        <td>
                                            <button 
                                                className={styles.detailsButton} 
                                                onClick={() => handleViewDetails(user)}
                                                title="Ver detalles"
                                            >
                                                Ver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Controles de Paginación */}
                    <div className={styles.pagination}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={styles.paginationButton}
                        >
                            Anterior
                        </button>
                        <span>Página {currentPage} de {totalPages}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={styles.paginationButton}
                        >
                            Siguiente
                        </button>
                    </div>
                </>
            )}

            {/* Modal de Detalles del Usuario */}
            <UserDetailModal user={selectedUser} onClose={handleCloseModal} />
        </div>
    );
};

export default UserDashboard;