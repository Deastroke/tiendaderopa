import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { login } from "..";
import { useAuth } from "../context/AuthContext";
import logo from '../assets/img/logo.png';

export default function Login() {

    const navigate = useNavigate();

    /*const handleRedirect = () => {
        navigate('/home');
    };*/

    const { user, logout } = useAuth();

    return (
        <>
            <nav className="flex items-center px-8 py-4 bg-primary text-white">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Hotel Icon"
                        width={32}
                        height={32}
                        className="mr-4"
                    />
                    <span className="text-xl font-poppins font-semibold">Trendy Closet</span>
                </div>
            </nav>
            <div className="min-h-screen flex flex-col justify-center bg-gray-50 sm:px-6 lg:px-8 font-poppins">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="text-center text-3xl font-poppins font-extrabold text-primary">{user?.name} Inicia sesión</h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">  
                    <div className="bg-white py-8 px-6 shadow-lg sm:rounded-lg">
                        <form className="space-y-6" onSubmit={(event) => login(event)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Correo electrónico
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Contraseña
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-s"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    //onClick={handleRedirect}
                                    type="submit"
                                    className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                ¿Aún no tienes una cuenta?
                            </p>
                            <Link to="/sign-up" className="font-medium text-primary hover:text-primary-dark">
                                Crea tu cuenta aquí
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}