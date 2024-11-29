import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Asumiendo que tienes el contexto de autenticación
import logo from '../assets/img/logo.png';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Dashboard() {
    const { user, logout } = useAuth(); // Obtener usuario y la función de logout
    const navigate = useNavigate();

    // Redirigir al Index si no hay usuario (ahora dentro de useEffect)
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]); // Se ejecuta cuando 'user' cambia

    // // Redirigir al Index si no hay usuario
    // if (!user) {
    //     navigate('/');
    // }

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('single');
    const [totalPrice, setTotalPrice] = useState(0);
    const [showConfirmButton, setShowConfirmButton] = useState(false);

    const roomPrices = {
        single: 800,
        double: 1200,
        suite: 2500,
    };

    const roomDescriptions = {
        single: 'Habitación cómoda y bien equipada con cama matrimonial o dos camas individuales, aire acondicionado, TV de pantalla plana y baño privado, ideal para estancias cortas.',
        double: 'Suite Deluxe equipada con cama matrimonial, sala de estar, minibar y baño privado con jacuzzi, ideal para familias y parejas que buscan lujo y comodidad.',
        suite: 'Suite de lujo con dormitorio independiente, sala de estar, jacuzzi privado y servicios personalizados, ideal para una escapada inolvidable.',
    };

    const calculateTotalPrice = () => {
        if (!checkInDate || !checkOutDate) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, selecciona las fechas de entrada y salida.',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#088395', // Botón de confirmar
            });
            return;
        }

        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const timeDifference = checkOut - checkIn;
        const days = timeDifference / (1000 * 3600 * 24);

        if (days > 0) {
            setTotalPrice(days * roomPrices[selectedRoom]);
            setShowConfirmButton(true);
        } else {
            Swal.fire({
                title: 'Error',
                text: 'La fecha de salida debe ser posterior a la fecha de entrada.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#088395', // Botón de confirmar
            });
        }
    };

    const confirmReservation = () => {
        Swal.fire({
            title: '¡Reserva confirmada!',
            text: 'Gracias por hacer tu reservación en Bosque Encantado. ¡Te esperamos pronto!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#088395', // Botón de confirmar
        }).then(() => {
            // Limpiar todos los campos después de la confirmación
            setCheckInDate('');
            setCheckOutDate('');
            setSelectedRoom('single');
            setTotalPrice(0);
            setShowConfirmButton(false);
        });
    };

    // Función para manejar el logout con confirmación
    const handleLogout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Quieres cerrar sesión?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#088395', // Botón de confirmar
            cancelButtonColor: '#f44336', // Botón de cancelar
        }).then((result) => {
            if (result.isConfirmed) {
                logout(); // Llamamos a la función logout solo si el usuario confirma
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <nav className="flex flex-col gap-y-3 md:flex-row justify-between items-center px-8 py-4 bg-primary text-white">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Hotel Icon"
                        width={32}
                        height={32}
                        className="mr-4"
                    />
                    <span className="text-xl font-poppins font-semibold">Bosque Encantado</span>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Si el usuario está logueado, mostramos el botón de cerrar sesión */}
                    {user && (
                        <>
                            <p className="font-medium text-base">¡Hola {user.name}!</p>
                            <button
                                onClick={handleLogout}
                                className="bg-transparent font-poppins font-medium text-white py-2 px-3 mr-2 hover:font-semibold hover:text-secondary rounded-full hover:bg-gray-100"
                            >
                                Cerrar sesión
                            </button>
                        </>
                    )}
                </div>
            </nav>

            {/* Contenido del Dashboard */}
            <div className="container mx-auto p-4 font-poppins">
                <h2 className="text-center text-3xl font-extrabold text-primary mb-6 mt-5">Reserva tu habitación</h2>
                
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Descripción de la habitación:</h3>
                    <p>{roomDescriptions[selectedRoom]}</p>
                    <p><strong>Precio por noche:</strong> ${roomPrices[selectedRoom]}</p>
                </div>

                <div className="mb-6">
                    <label htmlFor="room" className="block text-base font-semibold text-gray-700">Selecciona el tipo de habitación:</label>
                    <select
                        id="room"
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="single">Habitación Estándar</option>
                        <option value="double">Suite Deluxe</option>
                        <option value="suite">Suite Presidencial</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="checkIn" className="block text-base font-semibold text-gray-700">Fecha de entrada:</label>
                    <input
                        type="date"
                        id="checkIn"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="checkOut" className="block text-base font-semibold text-gray-700">Fecha de salida:</label>
                    <input
                        type="date"
                        id="checkOut"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-6">
                    <button
                        onClick={calculateTotalPrice}
                        className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark"
                    >
                        Calcular Precio Total
                    </button>
                </div>

                {totalPrice > 0 && (
                    <div className="my-4 text-2xl font-bold">
                        <p>Precio total: ${totalPrice}</p>
                    </div>
                )}

                {showConfirmButton && (
                    <div className="mb-6">
                        <button
                            onClick={confirmReservation}
                            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600"
                        >
                            Confirmar Reserva
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
