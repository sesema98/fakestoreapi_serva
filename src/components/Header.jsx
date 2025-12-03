import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/entities', label: 'Productos' },
  { to: '/contact', label: 'Contacto' },
];

const Header = () => {
  return (
    <header className="border-bottom bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-semibold">
            FakeStore
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {navItems.map(({ to, label }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `nav-link px-2 ${isActive ? 'active fw-semibold text-primary' : 'text-body-secondary'}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
