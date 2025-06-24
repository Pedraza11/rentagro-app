
import React from 'react';
import styles from './ContractDetailModal.module.css';
import { FaTimes, FaDownload, FaFilePdf } from 'react-icons/fa';

const ContractDetailModal = ({ contract, onClose }) => {
    if (!contract) return null;

    const handleDownloadPdf = (pdfUrl, title) => {
        if (pdfUrl) {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.setAttribute('download', `${title.replace(/\s/g, '_')}_contrato.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('No hay un PDF asociado a este contrato para descargar.');
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <FaTimes />
                </button>
                <h2 className={styles.modalTitle}>{contract.title}</h2>
                <div className={styles.contractDetails}>
                    <p><strong>Tipo:</strong> {contract.type}</p>
                    <p><strong>Estado:</strong> <span className={`${styles.statusBadge} ${styles[contract.status.toLowerCase()]}`}>{contract.status}</span></p>
                    <p><strong>Vigencia:</strong> {contract.startDate} al {contract.endDate}</p>
                    <p><strong>Área:</strong> {contract.area}</p>
                    <p><strong>Ubicación:</strong> {contract.location}</p>
                    <p><strong>Resumen de Términos:</strong> {contract.termsSummary}</p>
                   
                </div>

                {contract.pdfUrl ? (
                    <div className={styles.pdfViewer}>
                        <h3>Visualización del Contrato (PDF)</h3>
                        <iframe
                            src={contract.pdfUrl}
                            title={`Contrato ${contract.id}`}
                            width="100%"
                            height="500px"
                            className={styles.pdfIframe}
                            allow="fullscreen"
                        >
                            <p>Tu navegador no soporta la visualización de PDFs. Puedes <a href={contract.pdfUrl} target="_blank" rel="noopener noreferrer">descargar el PDF aquí</a>.</p>
                        </iframe>
                        <button className={styles.downloadButton} onClick={() => handleDownloadPdf(contract.pdfUrl, contract.title)}>
                            <FaDownload /> <FaFilePdf /> Descargar PDF
                        </button>
                    </div>
                ) : (
                    <p className={styles.noPdfMessage}>No hay un archivo PDF disponible para este contrato.</p>
                )}
            </div>
        </div>
    );
};

export default ContractDetailModal;