import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/logo.png';
import pizza from '../assets/pizza.avif';
import pasta from '../assets/pasta.avif';
import lasana from '../assets/lasana.jpg';
import vino from '../assets/vino.jpg';

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: 'Pizza Margherita',
      image: pizza,
      description: 'Pizza clásica con tomate, mozzarella fresca y albahaca'
    },
    {
      id: 2,
      name: 'Pasta Carbonara',
      image: pasta,
      description: 'Pasta fresca con salsa carbonara tradicional'
    },
    {
      id: 3,
      name: 'Lasaña Bolognesa',
      image: lasana,
      description: 'Capas de pasta con ragú de carne y bechamel'
    },
    {
      id: 4,
      name: 'Vino Toscano',
      image: vino,
      description: 'Selección de los mejores vinos italianos'
    }
  ];

  const scrollToReservation = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Bella Italia" className="hero-logo" />
          <h1 className="hero-title">Bienvenidos a Bella Italia</h1>
          <p className="hero-subtitle">
            Auténtica cocina italiana en el corazón de la ciudad
          </p>
          <p className="hero-description">
            Descubre los sabores tradicionales de Italia con ingredientes frescos
            y recetas transmitidas por generaciones. Una experiencia culinaria
            que te transportará directamente a la Toscana.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              Ver Menú
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Reservar Mesa
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title text-center">Nuestros Platos Destacados</h2>
          <p className="section-subtitle text-center">
            Delicias preparadas con pasión y dedicación
          </p>

          <div className="grid grid-4 featured-grid">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="featured-card">
                <img src={dish.image} alt={dish.name} loading="lazy" />
                <h3 className="featured-card-title">{dish.name}</h3>
                <p className="featured-card-description">{dish.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-3">
            <Link to="/menu" className="btn btn-outline">
              Ver Menú Completo
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Tradición Italiana Desde 1985</h2>
              <p>
                En Bella Italia, cada plato cuenta una historia. Nuestra familia
                ha traído las auténticas recetas italianas a través del océano,
                manteniendo vivas las tradiciones culinarias de la región de Toscana.
              </p>
              <p>
                Utilizamos únicamente ingredientes de la más alta calidad, importados
                directamente de Italia, combinados con productos locales frescos para
                crear una experiencia gastronómica inolvidable.
              </p>
              <ul className="about-features">
                <li>Ingredientes frescos y de calidad premium</li>
                <li>Recetas tradicionales familiares</li>
                <li>Ambiente acogedor y elegante</li>
                <li>Servicio excepcional</li>
              </ul>
            </div>
            <div className="about-image">
              <img src={logo} alt="Bella Italia" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">¿Listo para una experiencia italiana auténtica?</h2>
          <p className="cta-description">
            Reserva tu mesa hoy y descubre por qué somos el restaurante italiano
            favorito de la ciudad
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Hacer una Reservación
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
