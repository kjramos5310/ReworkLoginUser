import React, { useState } from "react";
import { UserPlus, Trash2 } from 'lucide-react';

interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const GestionUsuarios: React.FC = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const agregarUsuario = () => {
        if (nombre.trim() && email.trim()) {
            const nuevoUsuario: Usuario = {
                id: Date.now(),
                nombre,
                email
            };
            setUsuarios([...usuarios, nuevoUsuario]);
            setNombre('');
            setEmail('');
        } else {
            alert('Nombre y email son requeridos');
        }
    }

    const eliminarUsuario = (id: number) => {
        const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== id);
        setUsuarios(usuariosFiltrados);
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Gestión de Usuarios</h1>
                
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Agregar Nuevo Usuario</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <button 
                        onClick={agregarUsuario}
                        className="mt-4 flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <UserPlus className="w-5 h-5 mr-2" />
                        Guardar Usuario
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-gray-700 p-4 border-b">Lista de Usuarios</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {usuarios.map((usuario) => (
                                    <tr key={usuario.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{usuario.nombre}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usuario.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => eliminarUsuario(usuario.id)}
                                                className="text-red-600 hover:text-red-900 flex items-center"
                                            >
                                                <Trash2 className="w-5 h-5 mr-1" />
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GestionUsuarios;