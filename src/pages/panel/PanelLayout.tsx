import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PackagePlus, Truck, Users, HardHat, LogOut } from 'lucide-react';

export default function PanelLayout() {
    const location = useLocation();

    const menuItems = [
        { name: 'Crear Guía', path: '/panel/crear-guia', icon: <PackagePlus size={20} /> },
        { name: 'Mis Envíos', path: '/panel/mis-envios', icon: <Truck size={20} /> },
        { name: 'Lista Clientes', path: '/panel/lista-clientes', icon: <Users size={20} /> },
        { name: 'Proveedores', path: '/panel/lista-proveedores', icon: <HardHat size={20} /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <aside className="w-64 bg-[#522B7A] text-white flex flex-col shadow-xl">
                <div className="p-6">
                    <img src="/logo.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
                    <p className="text-purple-300 text-xs mt-2 font-bold uppercase tracking-widest">Admin Panel</p>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                        ? 'bg-[#F38118] text-white shadow-lg'
                                        : 'hover:bg-white/10 text-purple-100'
                                    }`}
                            >
                                {item.icon}
                                <span className="font-semibold">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-purple-300 hover:text-white transition-colors">
                        <LogOut size={20} />
                        <span className="font-medium">Cerrar Sesión</span>
                    </Link>
                </div>
            </aside>

            {/* CONTENIDO PRINCIPAL */}
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="mb-8 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-[#522B7A]">
                        {menuItems.find(m => m.path === location.pathname)?.name || 'Panel de Control'}
                    </h2>
                    <div className="flex items-center gap-4 bg-white p-2 px-4 rounded-full shadow-sm">
                        <span className="text-sm font-bold text-gray-500">Admin: @jhon_doe</span>
                        <div className="w-8 h-8 bg-[#F38118] rounded-full"></div>
                    </div>
                </header>

                {/* Aquí se renderizan los módulos hijos */}
                <div className="bg-white rounded-3xl shadow-sm min-h-[calc(100vh-200px)] p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}