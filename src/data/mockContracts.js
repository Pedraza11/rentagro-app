// src/data/mockContracts.js

const mockContracts = [
    {
        id: 'C001',
        title: 'Arrendamiento Campo "La Esperanza"',
        type: 'Arrendamiento',
        status: 'Activo',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        landlordId: 'user1', // ID del arrendador (propietario)
        tenantId: 'user3',   // ID del arrendatario (productor)
        area: '150 Ha',
        location: 'Zona Rural, Villa María, Córdoba',
        termsSummary: 'Contrato estándar de arrendamiento rural por hectárea. Pago mensual. Incluye cláusula de rotación de cultivos.',
        pdfUrl: '/pdfs/contrato_la_esperanza.pdf' // URL simulada del PDF
    },
    {
        id: 'C002',
        title: 'Arrendamiento Campo "El Refugio"',
        type: 'Arrendamiento',
        status: 'Vencido',
        startDate: '2023-03-01',
        endDate: '2024-02-28',
        landlordId: 'user2',
        tenantId: 'user1',
        area: '200 Ha',
        location: 'Las Varillas, Córdoba',
        termsSummary: 'Contrato de arrendamiento para soja y maíz. Vencido, pendiente de renovación.',
        pdfUrl: '/pdfs/contrato_el_refugio.pdf'
    },
    {
        id: 'C003',
        title: 'Contrato de Pastoreo "La Serena"',
        type: 'Pastoreo',
        status: 'Activo',
        startDate: '2024-05-15',
        endDate: '2025-05-14',
        landlordId: 'user3',
        tenantId: 'user4',
        area: '80 Ha',
        location: 'Marcos Juárez, Córdoba',
        termsSummary: 'Contrato de pastoreo para ganado bovino. Canon trimestral.',
        pdfUrl: '/pdfs/contrato_la_serena.pdf'
    },
    {
        id: 'C004',
        title: 'Arrendamiento Campo "San Isidro"',
        type: 'Arrendamiento',
        status: 'Activo',
        startDate: '2025-01-01', // Futuro
        endDate: '2025-12-31',
        landlordId: 'user1', // Mismo arrendador que C001
        tenantId: 'user4',
        area: '100 Ha',
        location: 'Bell Ville, Córdoba',
        termsSummary: 'Nuevo contrato. Pago anual adelantado. Para siembra de trigo.',
        pdfUrl: '/pdfs/contrato_san_isidro.pdf'
    },
    {
        id: 'C005',
        title: 'Contrato de Servicio de Cosecha',
        type: 'Servicio',
        status: 'Pendiente',
        startDate: '2024-11-01',
        endDate: '2024-11-30',
        landlordId: 'user5', // Otro usuario (simulado como proveedor)
        tenantId: 'user1', // user1 es el que contrata el servicio
        area: '50 Ha',
        location: 'Oncativo, Córdoba',
        termsSummary: 'Servicio de cosecha de maíz por hectárea.',
        pdfUrl: '/pdfs/contrato_cosecha_oncativo.pdf'
    }
];

export default mockContracts;