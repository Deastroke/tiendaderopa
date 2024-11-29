import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import banner from '../assets/img/banner.jpg';
import logo from '../assets/img/logo.png';
import img1 from '../assets/img/campana.png';
import img2 from '../assets/img/montanas.png';
import img3 from '../assets/img/spa.png';
import img4 from '../assets/img/fuente-termal.png';
import img5 from '../assets/img/fogata.png';
import img6 from '../assets/img/organizador.png';
import imgh1 from '../assets/img/estandar.webp';
import imgh2 from '../assets/img/delux.png';
import imgh3 from '../assets/img/presidencial.png';

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
                    <span className="text-xl font-poppins font-semibold">Bosque Encantado</span>
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
                    <h1 className="text-5xl font-black font-poppins">Hotel Bosque Encantado</h1>
                    <p className="mt-4 text-lg font-poppins">
                        Disfruta de una experiencia única rodeado de naturaleza y confort.
                    </p>
                    <Link to="/login">
                        <button className="mt-6 bg-white text-secondary font-bold font-poppins py-3 px-8 rounded-full hover:bg-gray-100">
                            Haz tu Reservación
                        </button>
                    </Link>
                </div>
            </section>

            {/* Descripción del Hotel */}
            <section className="py-12 px-10 bg-white text-center">
                <h2 className="text-3xl font-bold font-poppins">Acerca de Nosotros</h2>
                <p className="mt-8 text-lg text-gray-600 font-poppins">
                    En  Bosque Encantado, nuestra historia nace del amor por la naturaleza y el deseo de ofrecer un espacio donde las personas puedan desconectar y disfrutar de su belleza. Desde 2021, hemos sido un santuario para quienes buscan aventura y tranquilidad en un entorno natural.<br/><br/>
                    Ubicado en un hermoso bosque, nuestro refugio cuenta con acogedoras cabañas y zonas de camping equipadas. Nuestro equipo se dedica a brindar experiencias memorables, desde actividades al aire libre hasta momentos de relajación bajo las estrellas.<br/><br/>
                    Te invitamos a formar parte de nuestra historia y crear recuerdos inolvidables en el Hotel Bosque Encantado.
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
                        <h3 className="text-xl font-bold mb-2 font-poppins">Alojamiento Confortable</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Disfruta de nuestras acogedoras cabañas y zonas de camping equipadas, ideales para una estancia relajante en medio de la naturaleza.
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
                        <h3 className="text-xl font-bold mb-2 font-poppins">Actividades al Aire Libre</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Participa en senderismo, paseos en bicicleta y excursiones guiadas para explorar la belleza del bosque y sus alrededores.
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
                        <h3 className="text-xl font-bold mb-2 font-poppins">Spa y Bienestar</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Relájate y rejuvenece en nuestro spa, donde ofrecemos masajes, tratamientos de belleza y sesiones de yoga al aire libre.
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
                        <h3 className="text-xl font-bold mb-2 font-poppins">Piscinas de Aguas Termales</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Sumérgete en nuestras piscinas de aguas termales, perfectas para relajarte y disfrutar de los beneficios terapéuticos de estas aguas en un entorno natural.
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
                        <h3 className="text-xl font-bold mb-2 font-poppins">Fogatas Nocturnas</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Comparte momentos especiales junto a la fogata, disfrutando de música, historias y malvaviscos asados bajo las estrellas.
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
                        <h3 className="text-xl font-bold mb-2 font-poppins">Eventos Especiales</h3>
                        <p className="font-poppins text-base text-gray-700">
                            Organizamos eventos y actividades exclusivas para grupos, como bodas, reuniones familiares y retiros corporativos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
