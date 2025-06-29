// src/data/mockUsers.js
const mockUsers = [
    {
        id: 'u001',
        fullName: 'Juan Pérez',
        email: 'juan.perez@example.com',
        role: 'Arrendador',
        status: 'Activo', // Activo, Inactivo, Suspendido, etc.
        contractId: 'C001',
        contractEndDate: '2025-12-31', // Formato YYYY-MM-DD para fácil comparación
        phone: '+5491112345678',
        address: 'Calle Falsa 123, Buenos Aires',
        lastLogin: '2025-06-20T10:30:00Z',
        registrationDate: '2024-01-15T09:00:00Z',
        quotaStatus: 'Al día', // Al día, Pendiente, Atrasado
        quintalWallet: '500 Quintales', // Cantidad de quintales en su billetera
        notes: 'Arrendador con múltiples propiedades y contratos.',
    },
    {
        id: 'u002',
        fullName: 'María Gómez',
        email: 'maria.gomez@example.com',
        role: 'Arrendatario',
        status: 'Activo',
        contractId: 'C002',
        contractEndDate: '2025-09-30',
        phone: '+5493519876543',
        address: 'Avenida Siempre Viva 742, Córdoba',
        lastLogin: '2025-06-22T14:45:00Z',
        registrationDate: '2024-03-01T11:00:00Z',
        quotaStatus: 'Pendiente',
        quintalWallet: '1200 Quintales',
        notes: 'Requiere seguimiento por cuotas pendientes.',
    },
    {
        id: 'u003',
        fullName: 'Carlos López',
        email: 'carlos.lopez@example.com',
        role: 'Arrendador',
        status: 'Inactivo', // Ejemplo de usuario inactivo
        contractId: 'C003',
        contractEndDate: '2025-07-15',
        phone: '+5492615551234',
        address: 'Ruta 40 km 10, Mendoza',
        lastLogin: '2025-05-10T08:00:00Z',
        registrationDate: '2024-02-20T10:00:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '800 Quintales',
        notes: 'Contrato a punto de vencer. Necesita renovación.',
    },
    {
        id: 'u004',
        fullName: 'Ana Torres',
        email: 'ana.torres@example.com',
        role: 'Arrendatario',
        status: 'Activo',
        contractId: 'C004',
        contractEndDate: '2025-11-20',
        phone: '+5493417654321',
        address: 'El Sembrador 50, Santa Fe',
        lastLogin: '2025-06-18T09:15:00Z',
        registrationDate: '2024-04-10T14:00:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '950 Quintales',
        notes: 'Usuario recurrente y puntual.',
    },
    {
        id: 'u005',
        fullName: 'Pedro Martínez',
        email: 'pedro.martinez@example.com',
        role: 'Arrendatario',
        status: 'Activo',
        contractId: 'C005',
        contractEndDate: '2024-08-01', // Contrato extinto o próximo a expirar
        phone: '+5493811234567',
        address: 'La Cosecha 100, Tucumán',
        lastLogin: '2025-06-01T16:00:00Z',
        registrationDate: '2023-07-25T13:00:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '1500 Quintales',
        notes: 'Contrato vencido. A verificar estado.',
    },
    {
        id: 'u006',
        fullName: 'Sofía Díaz',
        email: 'sofia.diaz@example.com',
        role: 'Arrendador',
        status: 'Activo',
        contractId: 'C006',
        contractEndDate: '2026-03-01',
        phone: '+5492994445566',
        address: 'Los Pinos 200, Neuquén',
        lastLogin: '2025-06-21T11:00:00Z',
        registrationDate: '2024-05-05T09:30:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '700 Quintales',
        notes: 'Nuevo arrendador. Potencial para expansión.',
    },
    {
        id: 'u007',
        fullName: 'Gabriel Sosa',
        email: 'gabriel.sosa@example.com',
        role: 'Arrendador',
        status: 'Activo',
        contractId: 'C001', // Mismo contrato que Juan Pérez
        contractEndDate: '2025-12-31',
        phone: '+5493421234567',
        address: 'Camino Real 500, Santa Fe',
        lastLogin: '2025-06-19T09:00:00Z',
        registrationDate: '2024-01-15T09:00:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '600 Quintales',
        notes: 'Arrendador asociado a Juan Pérez.',
    },
    {
        id: 'u008',
        fullName: 'Laura Fernández',
        email: 'laura.fernandez@example.com',
        role: 'Arrendatario',
        status: 'Activo',
        contractId: 'C007',
        contractEndDate: '2025-08-01',
        phone: '+5492211112233',
        address: 'Las Malvinas 300, La Plata',
        lastLogin: '2025-06-15T10:00:00Z',
        registrationDate: '2024-06-01T10:00:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '1100 Quintales',
        notes: 'Contrato nuevo, primer pago pendiente.',
    },
    {
        id: 'u009',
        fullName: 'Roberto Ruiz',
        email: 'roberto.ruiz@example.com',
        role: 'Arrendador',
        status: 'Activo',
        contractId: 'C008',
        contractEndDate: '2024-07-01', // Contrato extinto o próximo a expirar
        phone: '+5492977778899',
        address: 'Libertador 10, Comodoro Rivadavia',
        lastLogin: '2025-05-25T12:00:00Z',
        registrationDate: '2023-06-10T11:00:00Z',
        quotaStatus: 'Al día',
        quintalWallet: '400 Quintales',
        notes: 'Vencido, a contactar para renovación.',
    },
    {
        id: 'u010',
        fullName: 'Julia Galarza',
        email: 'julia.galarza@example.com',
        role: 'Arrendatario',
        status: 'Activo',
        contractId: 'C009',
        contractEndDate: '2025-10-15',
        phone: '+5493433334455',
        address: 'Entre Ríos 50, Paraná',
        lastLogin: '2025-06-10T13:00:00Z',
        registrationDate: '2024-02-01T10:00:00Z',
        quotaStatus: 'Atrasado',
        quintalWallet: '1000 Quintales',
        notes: 'Cuotas atrasadas, enviar recordatorio.',
    },
];

export default mockUsers;