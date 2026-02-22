// src/data/envios.ts
// src/data/envios.ts
export interface Paso {
    fecha: string;
    hora: string;
    ubicacion: string;
    descripcion: string;
    completado: boolean;
}

export interface Envio {
    estado: string;
    destino: string;
    destinatario: string; // <-- Nuevo
    entregaEstimada: string; // <-- Nuevo
    pasos: Paso[];
}

export const DATA_ENVIOS: Record<string, Envio> = {
    "VEN-123456": {
        estado: "En tránsito",
        destino: "Caracas, Venezuela",
        destinatario: "Juan Alberto Pérez",
        entregaEstimada: "Lunes, 23 de Febrero",
        pasos: [
            { fecha: "21 Feb", hora: "09:00 AM", ubicacion: "Centro de Distribución", descripcion: "El paquete ha salido hacia su destino.", completado: true },
            { fecha: "20 Feb", hora: "03:30 PM", ubicacion: "Almacén Principal", descripcion: "Procesado y listo para despacho.", completado: true },
            { fecha: "20 Feb", hora: "10:00 AM", ubicacion: "Punto de Recepción", descripcion: "Paquete recibido en nuestras oficinas.", completado: true },
            { fecha: "Pendiente", hora: "--:--", ubicacion: "Destino Final", descripcion: "Entrega estimada en las próximas 24 horas.", completado: false },
        ],
    },
};