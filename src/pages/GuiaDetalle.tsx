// src/pages/GuiaDetalle.tsx
import { useParams, Link } from 'react-router-dom';
import { DATA_ENVIOS } from '../data/envios';
import { CheckCircle2, Circle, Package, MapPin, ArrowLeft, User, CalendarClock } from 'lucide-react';

export default function GuiaDetalle() {
    const { code } = useParams<{ code: string }>();
    const envio = code ? DATA_ENVIOS[code] : null;

    if (!envio) {
        // ... (mismo código de error del paso anterior)
        return <div>No encontrado</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">

                <Link to="/" className="flex items-center gap-2 text-[#522B7A] font-bold mb-8 hover:translate-x-[-5px] transition-transform">
                    <ArrowLeft size={20} /> VOLVER AL BUSCADOR
                </Link>

                {/* Encabezado */}
                <div className="bg-[#522B7A] rounded-t-[2.5rem] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
                    <div>
                        <p className="text-purple-200 text-sm uppercase tracking-widest font-semibold mb-1">Número de Guía</p>
                        <h1 className="text-4xl md:text-5xl font-black">{code}</h1>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl text-center md:text-right border border-white/20">
                        <p className="text-purple-200 text-xs uppercase mb-1 font-bold">Estado Actual</p>
                        <p className="text-[#F38118] text-2xl font-black uppercase italic">{envio.estado}</p>
                    </div>
                </div>

                {/* SECCIÓN DE INFORMACIÓN DESTACADA (NUEVA) */}
                <div className="bg-white border-x border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-sm">
                    {/* Destinatario */}
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-100 p-3 rounded-xl text-[#522B7A]">
                            <User size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold">Destinatario</p>
                            <p className="text-[#522B7A] font-bold text-lg leading-tight">{envio.destinatario}</p>
                        </div>
                    </div>

                    {/* Ubicación */}
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-100 p-3 rounded-xl text-[#F38118]">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold">Destino</p>
                            <p className="text-[#522B7A] font-bold text-lg leading-tight">{envio.destino}</p>
                        </div>
                    </div>

                    {/* Entrega Estimada */}
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-xl text-green-600">
                            <CalendarClock size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold">Entrega Estimada</p>
                            <p className="text-[#522B7A] font-bold text-lg leading-tight">{envio.entregaEstimada}</p>
                        </div>
                    </div>
                </div>

                {/* STEPPER / LÍNEA DE TIEMPO */}
                <div className="bg-white rounded-b-[2.5rem] p-8 md:p-12 shadow-2xl border-t border-gray-100">
                    <h3 className="text-[#522B7A] font-black text-xl mb-12 flex items-center gap-3 uppercase tracking-tight">
                        <Package className="text-[#F38118]" size={28} />
                        Detalle del Recorrido
                    </h3>

                    <div className="relative">
                        {envio.pasos.map((paso, index) => (
                            <div key={index} className="relative pl-14 pb-12 last:pb-0">
                                {/* Línea vertical */}
                                {index !== envio.pasos.length - 1 && (
                                    <div className={`absolute left-[23px] top-10 w-[4px] h-full ${paso.completado ? 'bg-[#F38118]' : 'bg-gray-100'}`}></div>
                                )}

                                {/* Punto del Stepper */}
                                <div className="absolute left-0 top-0 z-10">
                                    {paso.completado ? (
                                        <div className="bg-[#F38118] p-1.5 rounded-full text-white shadow-lg shadow-orange-200">
                                            <CheckCircle2 size={36} strokeWidth={2.5} />
                                        </div>
                                    ) : (
                                        <div className="bg-white border-4 border-gray-200 p-2 rounded-full text-gray-200 shadow-sm ml-1.5">
                                            <Circle size={24} fill="currentColor" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex-1">
                                        <h4 className={`text-xl font-bold ${paso.completado ? 'text-[#522B7A]' : 'text-gray-400'}`}>
                                            {paso.ubicacion}
                                        </h4>
                                        <p className={`mt-1 text-base ${paso.completado ? 'text-gray-600' : 'text-gray-300'}`}>
                                            {paso.descripcion}
                                        </p>
                                    </div>
                                    <div className="md:text-right flex flex-col items-start md:items-end">
                                        <p className={`font-black text-base ${paso.completado ? 'text-[#F38118]' : 'text-gray-300'}`}>
                                            {paso.fecha}
                                        </p>
                                        <span className="text-sm text-gray-400 font-semibold">{paso.hora}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer simple */}
                <p className="mt-10 text-center text-gray-400 text-sm">
                    Sistema de rastreo oficial &bull; Todos los derechos reservados 2026
                </p>
            </div>
        </div>
    );
}