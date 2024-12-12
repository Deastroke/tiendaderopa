import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import banner from '../assets/img/banner1.jpg';
import logo from '../assets/img/logo.png';
import img1 from '../assets/img/asesoria.png';
import img2 from '../assets/img/modificar.png';
import img3 from '../assets/img/ropa.png';
// import img4 from '../assets/img/fuente-termal.png';
// import img5 from '../assets/img/fogata.png';
// import img6 from '../assets/img/ropa.png';
import img4 from '../assets/img/fidelidad.png';
import img5 from '../assets/img/domicilio.png';
import img6 from '../assets/img/ropa.png';

export default function Index() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Redirigir al Dashboard si el usuario está logueado
    if (user) {
        navigate('/home');
    }

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
                    <span className="text-xl font-poppins font-semibold">Trendy Closet</span>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Si no hay usuario */}
                    {!user ? (
                        <>
                            <Link to="/login">
                                <button className="bg-transparent font-poppins font-medium text-white py-2 px-3 mr-2 hover:font-semibold hover:text-secondary rounded-full hover:bg-gray-100">
                                    Iniciar Sesión
                                </button>
                            </Link>
                            <Link to="/sign-up">
                                <button className="bg-transparent font-poppins font-medium text-white py-2 px-3 hover:font-semibold hover:text-secondary rounded-full hover:bg-gray-100">
                                    Registrarse
                                </button>
                            </Link>
                        </>
                    ) : (
                        // Si hay un usuario autenticado
                        <>
                            <p className="font-medium text-lg sm:text-xl">¡Hola {user.name}!</p>
                            <button
                                onClick={logout}
                                className="bg-transparent font-poppins font-medium text-white py-2 px-3 hover:font-semibold hover:text-secondary rounded-full hover:bg-gray-100"
                            >
                                Cerrar sesión
                            </button>
                        </>
                    )}
                </div>
            </nav>

            {/* Sección Hero */}
            <section className="relative bg-blue-200 text-center py-20">
                <div className="absolute inset-0 opacity-80">
                    <img
                        src={banner}
                        alt="Hotel Banner"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-white">
                    <h1 className="text-5xl font-black font-poppins">Trendy Closet</h1>
                    <p className="mt-4 text-lg font-poppins">
                    Viste con estilo, siéntete única."
                    </p>
                    <Link to="/login">
                        <button className="mt-6 bg-white text-secondary font-bold font-poppins py-3 px-8 rounded-full hover:bg-gray-100">
                            Haz tu Pedido
                        </button>
                    </Link>
                </div>
            </section>

            {/* Descripción del Hotel */}
            <section className="py-12 px-10 bg-white text-center">
                <h2 className="text-3xl font-bold font-poppins">Acerca de Nosotros</h2>
                <p className="mt-8 text-lg text-gray-600 font-poppins">
                Bienvenidos a Trendy Closet, tu destino ideal para encontrar las últimas tendencias en moda y estilo. Nos apasiona ofrecerte ropa de alta calidad, cómoda y elegante, diseñada para que te sientas increíble cada día.
                </p>
            </section>

            {/* Servicios del Hotel */}
            <section className="py-12 px-6 bg-gray-100">
                <h2 className="text-3xl font-bold text-center font-poppins">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <img
                            src={img1}
                            alt="Alojamiento Confortable"
                            width={100} 
                            height={100}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 font-poppins">Asesoría de Estilo Personalizada</h3>
                        <p className="font-poppins text-base text-gray-700">
                        Ayuda a los clientes a encontrar prendas que resalten su estilo y personalidad. Ofrece consultas en tienda o virtuales.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <img
                            src={img2}
                            alt="Actividades al Aire Libre"
                            width={100} 
                            height={100}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 font-poppins">Modificaciones y Alteraciones</h3>
                        <p className="font-poppins text-base text-gray-700">
                        Ajusta las prendas a las medidas y preferencias del cliente. Ofrece servicios como acortar mangas o cambiar botones.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <img
                            src={img3}
                            alt="Spa y Bienestar"
                            width={100} 
                            height={100}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 font-poppins">Entrega a Domicilio</h3>
                        <p className="font-poppins text-base text-gray-700">
                        Realiza entregas rápidas a la puerta de los clientes, ya sea dentro de un área local o mediante envíos a nivel nacional.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <img
                            src={img4}
                            alt="Piscinas de Aguas Termales"
                            width={100} 
                            height={100} 
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 font-poppins">Programas de Fidelidad</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Premia a los clientes frecuentes con puntos o descuentos exclusivos. Acceso anticipado a colecciones y promociones.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <img
                            src={img5}
                            alt="Fogatas Nocturnas"
                            width={100} 
                            height={100}
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 font-poppins">Cambios y Devoluciones Sencillas</h3>
                        <p className="font-poppins text-base text-gray-700">
                        Facilita un proceso ágil para cambios y devoluciones. Sin complicaciones, en tienda o por correo.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <img
                            src={img6}
                            alt="Fogatas Nocturnas"
                            width={100} 
                            height={100} 
                            className="mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 font-poppins">Personalización de Prendas</h3>
                        <p className="font-poppins text-base text-gray-700">
                        Personaliza ropa con bordados, estampados o detalles únicos. Ofrece opciones que hagan la prenda más especial para cada cliente.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
