
import React, { useState, useEffect } from 'react';
import mockContracts from '../../data/mockContracts'; // Importa los datos de contratos
import styles from './ContractListScreen.module.css'; // Estilos para la pantalla
import ContractDetailModal from './ContractDetailModal'; // Modal para detalles/PDF
import { FaEye, FaDownload, FaFilePdf, FaSearch, FaTimesCircle } from 'react-icons/fa'; // Iconos


import mockUsers from '../../data/mockUsers';


const currentLoggedInUser = {
    id: 'user1', 
    role: 'arrendatario', 
    
};

const ContractListScreen = () => {
    const [contracts, setContracts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedContract, setSelectedContract] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'Activo', 'Vencido', 'Pendiente'
    const [filterType, setFilterType] = useState('all'); // 'all', 'Arrendamiento', 'Pastoreo', 'Servicio'

    useEffect(() => {
        
        let filteredByRole = mockContracts;

        if (currentLoggedInUser.role === 'arrendador') {
            
            filteredByRole = mockContracts.filter(contract => contract.landlordId === currentLoggedInUser.id);
        } else if (currentLoggedInUser.role === 'arrendatario') {
            
            filteredByRole = mockContracts.filter(contract => contract.tenantId === currentLoggedInUser.id);
        }
        
        setContracts(filteredByRole);
    }, []); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    const handleStatusFilterChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const handleTypeFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const openModal = (contract) => {
        setSelectedContract(contract);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedContract(null);
    };

    const handleDownloadPdf = (pdfUrl, title) => {
        if (pdfUrl) {
            
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.setAttribute('download', `${title.replace(/\s/g, '_')}_contrato.pdf`); // Nombre del archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('No hay un PDF asociado a este contrato para descargar.');
        }
    };

    const filteredContracts = contracts.filter(contract => {
        const matchesSearch = contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              contract.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              contract.termsSummary.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === 'all' || contract.status === filterStatus;
        const matchesType = filterType === 'all' || contract.type === filterType;

        return matchesSearch && matchesStatus && matchesType;
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Mis Contratos de Arrendamiento</h1>

            <div className={styles.controls}>
                <div className={styles.searchBar}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Buscar contratos por título, ubicación o términos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    {searchTerm && (
                        <FaTimesCircle className={styles.clearSearchIcon} onClick={handleClearSearch} />
                    )}
                </div>

                <div className={styles.filters}>
                    <select
                        className={styles.filterSelect}
                        value={filterStatus}
                        onChange={handleStatusFilterChange}
                    >
                        <option value="all">Todos los Estados</option>
                        <option value="Activo">Activos</option>
                        <option value="Vencido">Vencidos</option>
                        <option value="Pendiente">Pendientes</option>
                    </select>

                    <select
                        className={styles.filterSelect}
                        value={filterType}
                        onChange={handleTypeFilterChange}
                    >
                        <option value="all">Todos los Tipos</option>
                        <option value="Arrendamiento">Arrendamiento</option>
                        <option value="Pastoreo">Pastoreo</option>
                        <option value="Servicio">Servicio</option>
                    </select>
                </div>
            </div>

            {filteredContracts.length === 0 ? (
                <p className={styles.noContractsMessage}>No se encontraron contratos que coincidan con tus criterios.</p>
            ) : (
                <div className={styles.contractList}>
                    {filteredContracts.map(contract => (
                        <div key={contract.id} className={styles.contractCard}>
                            <h3 className={styles.contractTitle}>{contract.title}</h3>
                            <p className={styles.contractInfo}><strong>Tipo:</strong> {contract.type}</p>
                            <p className={styles.contractInfo}><strong>Estado:</strong> <span className={`${styles.statusBadge} ${styles[contract.status.toLowerCase()]}`}>{contract.status}</span></p>
                            <p className={styles.contractInfo}><strong>Vigencia:</strong> {contract.startDate} al {contract.endDate}</p>
                            <p className={styles.contractInfo}><strong>Área:</strong> {contract.area}</p>
                            <p className={styles.contractInfo}><strong>Ubicación:</strong> {contract.location}</p>
                            <p className={styles.contractInfo}>{contract.termsSummary}</p>
                            <div className={styles.cardActions}>
                                <button className={styles.actionButton} onClick={() => openModal(contract)} title="Ver Contrato">
                                    <FaEye /> Ver Contrato
                                </button>
                                {contract.pdfUrl && (
                                    <button className={styles.actionButton} onClick={() => handleDownloadPdf(contract.pdfUrl, contract.title)} title="Descargar PDF">
                                        <FaDownload /> <FaFilePdf /> Descargar PDF
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isModalOpen && selectedContract && (
                <ContractDetailModal contract={selectedContract} onClose={closeModal} />
            )}
        </div>
    );
};

export default ContractListScreen;