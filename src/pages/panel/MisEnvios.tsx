// src/pages/panel/MisEnvios.tsx
import { Package, Search, MoreVertical } from 'lucide-react';

const ENVIOS_DEMO = [
    { id: 'VEN-123456', cliente: 'Juan Pérez', destino: 'Caracas', fecha: '21/02/2026', estado: 'En tránsito' },
    { id: 'VEN-789012', cliente: 'Maria Sosa', destino: 'Valencia', fecha: '20/02/2026', estado: 'Entregado' },
    { id: 'VEN-456789', cliente: 'Carlos Ruiz', destino: 'Maracaibo', fecha: '19/02/2026', estado: 'Pendiente' },
    { id: 'VEN-112233', cliente: 'Ana Lopez', destino: 'Barquisimeto', fecha: '18/02/2026', estado: 'Cancelado' },
];

export default function MisEnvios() {

    const getStatusStyle = (estado: string) => {
        switch (estado) {
            case 'Entregado': return 'bg-green-100 text-green-700';
            case 'En tránsito': return 'bg-blue-100 text-blue-700';
            case 'Pendiente': return 'bg-amber-100 text-amber-700';
            case 'Cancelado': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header del Módulo */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-xl font-bold text-[#522B7A]">Listado de Envíos</h3>
                    <p className="text-gray-500 text-sm">Gestiona y monitorea todos los paquetes activos.</p>
                </div>

                {/* Buscador interno del panel */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar por guía o nombre..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl outline-none focus:border-[#F38118] w-full md:w-64 transition-all"
                    />
                </div>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 text-[#522B7A] uppercase text-xs font-black tracking-wider">
                            <th className="px-6 py-4">Nº Guía</th>
                            <th className="px-6 py-4">Cliente</th>
                            <th className="px-6 py-4">Destino</th>
                            <th className="px-6 py-4">Fecha</th>
                            <th className="px-6 py-4">Estado</th>
                            <th className="px-6 py-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {ENVIOS_DEMO.map((envio) => (
                            <tr key={envio.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4 font-bold text-[#522B7A] flex items-center gap-2">
                                    <Package size={16} className="text-[#F38118]" />
                                    {envio.id}
                                </td>
                                <td className="px-6 py-4 text-gray-600 font-medium">{envio.cliente}</td>
                                <td className="px-6 py-4 text-gray-600">{envio.destino}</td>
                                <td className="px-6 py-4 text-gray-400 text-sm">{envio.fecha}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(envio.estado)}`}>
                                        {envio.estado}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-gray-400 hover:text-[#522B7A] p-1">
                                        <MoreVertical size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}