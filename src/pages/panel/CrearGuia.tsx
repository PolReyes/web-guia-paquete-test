import { useState } from 'react';
import { FileText, PackagePlus, User, Info, Calendar, Clock, Ship, Plane, LayoutPanelLeft } from 'lucide-react';
import { jsPDF } from "jspdf";

// ... dentro de tu componente CrearGuia ...

const generarPDF = () => {
    const doc = new jsPDF();

    // 1. Colores de marca
    const purpura = [82, 43, 122]; // #522B7A
    const naranja = [243, 129, 24]; // #F38118

    // 2. Encabezado (Rectángulo Púrpura)
    doc.setFillColor(purpura[0], purpura[1], purpura[2]);
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("GUÍA DE REMISIÓN", 20, 25);

    doc.setFontSize(10);
    doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, 140, 25);

    // 3. Cuerpo del PDF - Datos del Cliente y Proveedor
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Información del Envío", 20, 55);
    doc.setLineWidth(0.5);
    doc.setDrawColor(naranja[0], naranja[1], naranja[2]);
    doc.line(20, 58, 60, 58); // Línea naranja decorativa

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");

    // Usaremos los valores del estado o del formulario directamente
    doc.text(`Cliente: Juan Alberto Pérez`, 20, 70);
    doc.text(`Teléfono: +58 412 1234567`, 20, 78);
    doc.text(`Proveedor: DHL Global`, 110, 70);
    doc.text(`Tipo de Envío: Aéreo`, 110, 78);

    // 4. Descripción del Producto (Caja Gris)
    doc.setFillColor(245, 245, 245);
    doc.rect(20, 90, 170, 40, 'F');
    doc.setFont("helvetica", "bold");
    doc.text("Descripción del Producto:", 25, 100);
    doc.setFont("helvetica", "normal");
    doc.text("Cajas de repuestos electrónicos con baterías de litio protegidas.", 25, 110, { maxWidth: 160 });

    // 5. Total (Resaltado en Naranja)
    doc.setFillColor(naranja[0], naranja[1], naranja[2]);
    doc.rect(130, 140, 60, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL: S/. 450.00", 135, 150);

    // 6. Pie de página
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(8);
    doc.text("Documento generado por el Sistema de Logística 2026", 105, 285, { align: "center" });

    // Descargar el archivo
    doc.save(`Guia_${Date.now()}.pdf`);
};
export default function CrearGuia() {
    const [formData] = useState({
        fecha: new Date().toISOString().split('T')[0],
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    });

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in duration-500">
            <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                    <h3 className="text-3xl font-black text-[#522B7A] flex items-center gap-3">
                        <PackagePlus className="text-[#F38118]" size={36} />
                        GENERAR NUEVA GUÍA
                    </h3>
                    <p className="text-gray-500 mt-1">Ingresa los datos para el registro del trayecto y facturación.</p>
                </div>
                <div className="bg-[#522B7A]/5 px-4 py-2 rounded-xl border border-[#522B7A]/10">
                    <span className="text-[#522B7A] font-bold text-sm uppercase tracking-tighter">ID Temporal: TEMP-001</span>
                </div>
            </header>

            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* GRUPO A: LOGÍSTICA Y TIEMPO */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2 text-[#522B7A] font-bold border-l-4 border-[#F38118] pl-3">
                            <Calendar size={20} /> <span>Logística de Salida</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-1">
                                    <Calendar size={14} /> Fecha
                                </label>
                                <input type="date" defaultValue={formData.fecha} className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-1">
                                    <Clock size={14} /> Hora
                                </label>
                                <input type="time" defaultValue={formData.hora} className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-1">
                                Tipo de Envío
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {['Aéreo', 'Marítimo', 'Multimodal'].map((tipo) => (
                                    <label key={tipo} className="relative cursor-pointer group">
                                        <input type="radio" name="tipo" value={tipo} className="peer sr-only" defaultChecked={tipo === 'Aéreo'} />
                                        <div className="p-3 text-center rounded-xl border-2 border-gray-100 peer-checked:border-[#F38118] peer-checked:bg-[#F38118]/5 peer-checked:text-[#F38118] font-bold text-sm transition-all group-hover:bg-gray-50">
                                            {tipo === 'Aéreo' && <Plane size={16} className="mx-auto mb-1" />}
                                            {tipo === 'Marítimo' && <Ship size={16} className="mx-auto mb-1" />}
                                            {tipo === 'Multimodal' && <LayoutPanelLeft size={16} className="mx-auto mb-1" />}
                                            {tipo}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* GRUPO B: CLIENTE Y PROVEEDOR */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2 text-[#522B7A] font-bold border-l-4 border-[#F38118] pl-3">
                            <User size={20} /> <span>Intervinientes</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase">Cliente</label>
                                <input type="text" placeholder="Nombre completo" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase">Teléfono Cliente</label>
                                <input type="tel" placeholder="+00 000..." className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase">Proveedor</label>
                                <input type="text" placeholder="Nombre empresa" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase">Teléfono Prov.</label>
                                <input type="tel" placeholder="+00 000..." className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all" />
                            </div>
                        </div>
                    </section>

                    {/* GRUPO C: DETALLES DEL PRODUCTO (TEXTAREA) */}
                    <section className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 text-[#522B7A] font-bold border-l-4 border-[#F38118] pl-3">
                            <Info size={20} /> <span>Contenido del Envío</span>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-500 uppercase italic">
                                Descripción detallada del producto
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Escribe aquí los detalles, peso, dimensiones o notas especiales del producto..."
                                className="w-full p-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#F38118] focus:bg-white outline-none transition-all resize-none shadow-inner text-gray-700"
                            ></textarea>
                        </div>
                    </section>

                    {/* VALOR DE SERVICIO (BARRA COMPACTA) */}
                    <section className="md:col-span-2 bg-[#522B7A] p-4 px-6 rounded-2xl flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-2">
                            <span className="text-white text-sm font-bold uppercase tracking-wider">Monto Total del Servicio</span>
                        </div>

                        <div className="relative w-40">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F38118] font-bold text-sm">S/. </span>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="w-full bg-white/10 border border-white/10 rounded-xl py-2 pl-8 pr-4 text-white text-xl font-black outline-none focus:bg-white focus:text-[#522B7A] transition-all"
                            />
                        </div>
                    </section>
                </div>

                {/* BOTÓN GUARDAR (NARANJA - TAMAÑO AJUSTADO) */}
                <div className="flex flex-col md:flex-row justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={generarPDF}
                        className="bg-white border-2 border-[#522B7A] text-[#522B7A] px-6 py-3 rounded-2xl font-bold text-sm hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                    >
                        <FileText size={18} />
                        DESCARGAR PDF
                    </button>

                    <button
                        type="submit"
                        className="bg-[#F38118] hover:bg-[#d66f12] text-white px-10 py-4 rounded-2xl font-black text-sm shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest"
                    >
                        GUARDAR NUEVA GUÍA
                        <PackagePlus size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
}