import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Asumiendo que tienes el contexto de autenticación
import logo from '../assets/img/logo.png';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Dashboard() {
    const { user, logout } = useAuth(); // Obtener usuario y la función de logout
    const navigate = useNavigate();

    // Redirigir al Login si no hay usuario
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const [selectedProduct, setSelectedProduct] = useState('shirt');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const productPrices = {
        shirt: 500,
        jeans: 800,
        dress: 1200,
        jacket: 1500,
    };

    const productDescriptions = {
        shirt: 'Camisa casual de alta calidad, ideal para ocasiones informales y formales.',
        jeans: 'Jeans clásicos, cómodos y duraderos, perfectos para el día a día.',
        dress: 'Vestido elegante y moderno, diseñado para destacar en cualquier evento.',
        jacket: 'Chaqueta abrigadora y estilizada, perfecta para temporadas frías.',
    };

    const calculateTotalPrice = () => {
        if (!selectedSize) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, selecciona una talla para el producto.',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#088395',
            });
            return;
        }

        setTotalPrice(quantity * productPrices[selectedProduct]);
    };

    const confirmPurchase = () => {
        Swal.fire({
            title: '¡Compra confirmada!',
            text: `Gracias por tu compra de ${quantity} ${selectedProduct}(s). ¡Te esperamos pronto en Trendy Closet!`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#088395',
        }).then(() => {
            // Limpiar los campos después de la confirmación
            setSelectedProduct('shirt');
            setSelectedSize('');
            setQuantity(1);
            setTotalPrice(0);
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
            confirmButtonColor: '#088395',
            cancelButtonColor: '#f44336',
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <nav className="flex flex-col gap-y-3 md:flex-row justify-between items-center px-8 py-4 bg-primary text-white">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Tienda Trendy Closet"
                        width={32}
                        height={32}
                        className="mr-4"
                    />
                    <span className="text-xl font-poppins font-semibold">Trendy Closet</span>
                </div>

                <div className="flex items-center space-x-4">
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

            <div className="container mx-auto p-4 font-poppins">
                <h2 className="text-center text-3xl font-extrabold text-primary mb-6 mt-5">Compra tu ropa favorita</h2>
                
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Descripción del producto:</h3>
                    <p>{productDescriptions[selectedProduct]}</p>
                    <p><strong>Precio por unidad:</strong> ${productPrices[selectedProduct]}</p>
                </div>

                <div className="mb-6">
                    <label htmlFor="product" className="block text-base font-semibold text-gray-700">Selecciona el producto:</label>
                    <select
                        id="product"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="shirt">Camisa</option>
                        <option value="jeans">Jeans</option>
                        <option value="dress">Vestido</option>
                        <option value="jacket">Chaqueta</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="size" className="block text-base font-semibold text-gray-700">Selecciona la talla:</label>
                    <select
                        id="size"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Selecciona una talla</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="quantity" className="block text-base font-semibold text-gray-700">Cantidad:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
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

                {totalPrice > 0 && (
                    <div className="mb-6">
                        <button
                            onClick={confirmPurchase}
                            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600"
                        >
                            Confirmar Compra
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
