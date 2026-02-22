import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinned } from 'lucide-react';

export default function Home() {
    const [guia, setGuia] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (guia.trim()) {
            navigate(`/guia/${guia.trim().toUpperCase()}`);
        }
    };

    // URL de una imagen de logística de Unsplash (puedes cambiarla por la tuya)
    const backgroundImageUrl = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80";

    return (
        // CONTENEDOR PRINCIPAL CON IMAGEN DE FONDO
        // 'min-h-screen' asegura que ocupe toda la altura.
        // 'px-4' da un margen de seguridad en móviles para que no pegue a los bordes.
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('${backgroundImageUrl}')`
            }}
        >
            {/* Overlay oscuro: oscurece la imagen de fondo para que el texto resalte */}
            <div className="absolute inset-0 bg-[#522B7A]/40 mix-blend-multiply z-0"></div>

            {/* TARJETA CENTRAL (Glassmorphism) */}
      // Se adapta al ancho: w-full pero con un máximo de max-w-4xl.
            // Padding responsive: p-8 en móvil, p-14 en escritorio.
            <div className="relative z-10 w-full max-w-5xl bg-white/90 backdrop-blur-sm border border-white/20 p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col items-center text-center leading-relaxed">

                {/* Logo: Altura responsive (h-32 en móvil, h-48 en escritorio) */}
                <div className="mb-8 md:mb-10">
                    <img
                        src="/logo.png"
                        alt="Logo Empresa"
                        className="h-32 md:h-48 w-auto object-contain drop-shadow-md"
                    />
                </div>

                {/* Títulos: Tamaños de fuente responsive */}
                <h1 className="text-[#522B7A] text-3xl md:text-6xl font-black mb-4 tracking-tight">
                    Sigue el trayecto de tu paquete
                </h1>
                <p className="text-[#522B7A]/80 text-lg md:text-2xl mb-12 font-medium">
                    ingresando el número de guía a continuación
                </p>

                {/* BUSCADOR RESPONSIVE // AQUÍ ESTÁ LA MAGIA: 'flex-col' (vertical en móvil) -> 'md:flex-row' (horizontal en escritorio) */}

                <form
                    onSubmit={handleSearch}
                    className="w-full max-w-3xl flex flex-col md:flex-row gap-3 md:gap-0 bg-white rounded-3xl md:rounded-full p-2 shadow-lg transition-all focus-within:ring-4 focus-within:ring-[#F38118]/20"
                >
                    <input
                        type="text"
                        placeholder="Ingresa tu número de guía..."
                        className="flex-1 p-4 md:p-6 px-6 outline-none text-gray-700 text-lg md:text-xl font-medium bg-transparent text-center md:text-left"
                        value={guia}
                        onChange={(e) => setGuia(e.target.value)}
                    />
                    {/* Botón: Ancho total en móvil, ancho automático en escritorio */}
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-[#F38118] hover:bg-[#d66f12] text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-2xl md:rounded-full flex items-center justify-center gap-3 transition-transform active:scale-95 uppercase tracking-wider text-lg shadow-md"
                    >
                        <MapPinned size={26} />
                        Rastrear
                    </button>
                </form>

                <p className="mt-8 text-sm md:text-base text-gray-500 font-medium">
                    Ejemplo válido: <span className="font-mono font-bold text-[#F38118] bg-[#F38118]/10 px-2 py-1 rounded">VEN-123456</span>
                </p>
            </div>
        </div>
    );
}