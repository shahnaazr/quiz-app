interface HeaderProps {
  category: string;
}

const Header: React.FC<HeaderProps> = ({ category }) => (
  <header className="header__container">
    <h2 className="header__title">{category}</h2>
  </header>
);

export default Header;
