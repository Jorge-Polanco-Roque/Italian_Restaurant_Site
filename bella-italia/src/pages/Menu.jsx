import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import pizza from '../assets/pizza.avif';
import pasta from '../assets/pasta.avif';
import lasana from '../assets/lasana.jpg';
import vino from '../assets/vino.jpg';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    {
      id: 1,
      category: 'pizzas',
      name: 'Pizza Margherita',
      description: 'Tomate San Marzano, mozzarella fresca, albahaca y aceite de oliva',
      price: '12.90',
      image: pizza
    },
    {
      id: 2,
      category: 'pizzas',
      name: 'Pizza Quattro Formaggi',
      description: 'Mozzarella, gorgonzola, parmesano y queso de cabra',
      price: '14.90',
      image: pizza
    },
    {
      id: 3,
      category: 'pizzas',
      name: 'Pizza Prosciutto',
      description: 'Tomate, mozzarella, jamón de Parma, rúcula y parmesano',
      price: '15.90',
      image: pizza
    },
    {
      id: 4,
      category: 'pastas',
      name: 'Spaghetti Carbonara',
      description: 'Pasta fresca, huevo, panceta, pecorino romano y pimienta negra',
      price: '13.90',
      image: pasta
    },
    {
      id: 5,
      category: 'pastas',
      name: 'Fettuccine Alfredo',
      description: 'Pasta fresca, mantequilla, crema, parmesano y nuez moscada',
      price: '12.90',
      image: pasta
    },
    {
      id: 6,
      category: 'pastas',
      name: 'Penne Arrabiata',
      description: 'Pasta, tomate, ajo, guindilla, perejil y aceite de oliva',
      price: '11.90',
      image: pasta
    },
    {
      id: 7,
      category: 'pastas',
      name: 'Lasaña Bolognesa',
      description: 'Capas de pasta, ragú de carne, bechamel y parmesano',
      price: '14.90',
      image: lasana
    },
    {
      id: 8,
      category: 'pastas',
      name: 'Ravioli de Ricotta',
      description: 'Ravioli rellenos de ricotta y espinacas con salsa de tomate',
      price: '13.90',
      image: pasta
    },
    {
      id: 9,
      category: 'bebidas',
      name: 'Chianti Classico',
      description: 'Vino tinto de la región de Toscana',
      price: '24.90',
      image: vino
    },
    {
      id: 10,
      category: 'bebidas',
      name: 'Prosecco',
      description: 'Vino espumoso del Véneto',
      price: '22.90',
      image: vino
    },
    {
      id: 11,
      category: 'bebidas',
      name: 'Limoncello',
      description: 'Licor de limón artesanal',
      price: '6.90',
      image: vino
    },
    {
      id: 12,
      category: 'bebidas',
      name: 'Espresso',
      description: 'Café italiano auténtico',
      price: '2.50',
      image: vino
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'pastas', name: 'Pastas' },
    { id: 'bebidas', name: 'Bebidas' }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <h1 className="menu-hero-title">Nuestro Menú</h1>
          <p className="menu-hero-subtitle">
            Descubre los auténticos sabores de Italia
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          {/* Category Filters */}
          <div className="menu-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="menu-grid grid grid-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card card">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-card-content">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-price">{item.price}€</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="menu-cta text-center mt-3">
            <h3>¿Te gustaría probar nuestros platos?</h3>
            <p>Reserva tu mesa ahora y disfruta de una experiencia culinaria auténtica</p>
            <Link to="/contact" className="btn btn-primary">
              Reservar Mesa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
