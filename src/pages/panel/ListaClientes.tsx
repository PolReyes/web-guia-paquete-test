import { Search, UserPlus, Mail, Phone, MoreHorizontal, User } from 'lucide-react';

const CLIENTES_DEMO = [
    { id: 1, nombre: 'Juan Alberto Pérez', email: 'juan.perez@email.com', telefono: '+58 412 1234567', ciudad: 'Caracas', envios: 12 },
    { id: 2, nombre: 'María Fernanda Sosa', email: 'm.sosa@empresa.com', telefono: '+58 424 9876543', ciudad: 'Valencia', envios: 5 },
    { id: 3, nombre: 'Carlos Ruiz', email: 'cruiz_logistica@gmail.com', telefono: '+58 414 5550011', ciudad: 'Maracaibo', envios: 28 },
    { id: 4, nombre: 'Distribuidora Global C.A', email: 'contacto@dglobal.ve', telefono: '+58 212 3334455', ciudad: 'Caracas', envios: 84 },
];

export default function ListaClientes() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            {/* HEADER DEL MÓDULO */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-black text-[#522B7A] flex items-center gap-2">
                        <User className="text-[#F38118]" size={28} />
                        DIRECTORIO DE CLIENTES
                    </h3>
                    <p className="text-gray-400 text-sm">Gestión de datos de contacto y recurrencia.</p>
                </div>

                <div className="flex gap-3">
                    {/* BUSCADOR COMPACTO */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar cliente..."
                            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-[#F38118] focus:bg-white transition-all w-full md:w-60"
                        />
                    </div>

                    <button className="bg-[#522B7A] hover:bg-[#3d205b] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-purple-200">
                        <UserPlus size={18} />
                        <span className="hidden md:block">NUEVO CLIENTE</span>
                    </button>
                </div>
            </div>

            {/* TABLA DE CLIENTES */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-[#522B7A] text-[10px] font-black uppercase tracking-widest">
                            <th className="px-6 py-4">Nombre / Empresa</th>
                            <th className="px-6 py-4">Contacto</th>
                            <th className="px-6 py-4">Ubicación</th>
                            <th className="px-6 py-4 text-center">Envíos Totales</th>
                            <th className="px-6 py-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {CLIENTES_DEMO.map((cliente) => (
                            <tr key={cliente.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-100 text-[#522B7A] rounded-full flex items-center justify-center font-bold text-xs">
                                            {cliente.nombre.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-700 leading-none">{cliente.nombre}</p>
                                            <p className="text-[11px] text-gray-400 mt-1">ID: #CL-00{cliente.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Mail size={12} className="text-[#F38118]" /> {cliente.email}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Phone size={12} className="text-[#F38118]" /> {cliente.telefono}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase">
                                    {cliente.ciudad}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="bg-[#522B7A]/5 text-[#522B7A] px-3 py-1 rounded-lg font-black text-xs">
                                        {cliente.envios}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-300 hover:text-[#F38118] transition-colors">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* FOOTER DE TABLA */}
            <div className="flex items-center justify-between px-2">
                <p className="text-xs text-gray-400 font-medium italic">Mostrando 4 clientes de 128 totales</p>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-bold text-gray-400 hover:bg-gray-50 transition-all">Anterior</button>
                    <button className="px-3 py-1 bg-[#F38118] text-white rounded-lg text-xs font-bold hover:bg-[#d66f12] transition-all shadow-sm">Siguiente</button>
                </div>
            </div>
        </div>
    );
}