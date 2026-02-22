// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home';
import GuiaDetalle from './pages/GuiaDetalle';
import PanelLayout from './pages/panel/PanelLayout';
import CrearGuia from './pages/panel/CrearGuia';
import MisEnvios from './pages/panel/MisEnvios';
import ListaClientes from './pages/panel/ListaClientes';
import ListaProveedores from './pages/panel/ListaProveedores';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/guia/:code", element: <GuiaDetalle /> },
  {
    path: "/panel",
    element: <PanelLayout />, // El diseño base con el Sidebar
    children: [
      { path: "crear-guia", element: <CrearGuia /> },
      { path: "mis-envios", element: <MisEnvios /> },
      { path: "lista-clientes", element: <ListaClientes /> },
      { path: "lista-proveedores", element: <ListaProveedores /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)