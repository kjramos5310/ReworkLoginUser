import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Users, Phone } from 'lucide-react';

interface NavBarProps {
    onLogout: () => void;
}

function Navbar({ onLogout }: NavBarProps) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate("/login");
    }

    return (
        <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                <Link 
                                    to="/usuarios" 
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    Usuarios
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button
                            onClick={handleLogout}
                            className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                        >
                            <LogOut className="w-5 h-5 mr-2" />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;