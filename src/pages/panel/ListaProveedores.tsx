import { Search, Plus, Phone, Globe, MoreHorizontal, Truck, ShieldCheck, MapPin } from 'lucide-react';

const PROVEEDORES_DEMO = [
    { id: 1, empresa: 'DHL Global Forwarding', contacto: 'Soporte Empresas', tel: '+1 800 225 5345', tipo: 'Aéreo/Marítimo', rating: 'Premium' },
    { id: 2, empresa: 'FedEx Express', contacto: 'Área Logística', tel: '+1 800 463 3339', tipo: 'Aéreo', rating: 'Estándar' },
    { id: 3, empresa: 'Maersk Line', contacto: 'Despacho Marítimo', tel: '+45 3363 3363', tipo: 'Marítimo', rating: 'Premium' },
    { id: 4, empresa: 'Liberty Express', contacto: 'Carga Nacional', tel: '+58 212 955 3000', tipo: 'Multimodal', rating: 'Local' },
];

export default function ListaProveedores() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-black text-[#522B7A] flex items-center gap-2">
                        <Truck className="text-[#F38118]" size={28} />
                        SOCIOS LOGÍSTICOS
                    </h3>
                    <p className="text-gray-400 text-sm">Gestión de proveedores y líneas de transporte.</p>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar proveedor..."
                            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-[#F38118] transition-all w-full md:w-60"
                        />
                    </div>
                    <button className="bg-[#522B7A] hover:bg-[#3d205b] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md">
                        <Plus size={18} />
                        <span className="hidden md:block">AÑADIR</span>
                    </button>
                </div>
            </div>

            {/* TABLA DE PROVEEDORES */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-[#522B7A] text-[10px] font-black uppercase tracking-widest">
                            <th className="px-6 py-4">Empresa Logística</th>
                            <th className="px-6 py-4">Servicios</th>
                            <th className="px-6 py-4">Contacto Directo</th>
                            <th className="px-6 py-4 text-center">Calificación</th>
                            <th className="px-6 py-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {PROVEEDORES_DEMO.map((prov) => (
                            <tr key={prov.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-100 text-[#F38118] rounded-xl flex items-center justify-center shadow-inner">
                                            <Truck size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-gray-700 leading-none">{prov.empresa}</p>
                                            <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">
                                                <Globe size={10} /> Operación Internacional
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-xs font-bold text-[#522B7A] bg-[#522B7A]/5 px-2 py-1 rounded-md">
                                        {prov.tipo}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-gray-600">{prov.contacto}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <Phone size={12} className="text-[#F38118]" /> {prov.tel}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase ${prov.rating === 'Premium' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {prov.rating === 'Premium' && <ShieldCheck size={12} />}
                                        {prov.rating}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-300 hover:text-[#522B7A] transition-colors">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* INFO EXTRA 
            <div className="bg-[#F38118]/5 border border-[#F38118]/10 p-4 rounded-2xl flex items-center gap-3">
                <div className="bg-[#F38118] text-white p-2 rounded-lg">
                    <MapPin size={18} />
                </div>
                <p className="text-xs text-gray-600">
                    <strong className="text-[#522B7A]">Tip de administración:</strong> Los proveedores marcados como <span className="text-green-600 font-bold italic">Premium</span> tienen prioridad en la asignación de guías internacionales por cumplimiento de tiempos.
                </p>
            </div>*/}
        </div>
    );
}