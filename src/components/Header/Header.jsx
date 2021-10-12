import Title from '../Title/Title';
import './Header.css';

const Header = () => (
  <header>
    <img src="https://francoisdoussin.com/assets/img/francoisdoussin.jpg" />
    <div className="Header-information">
      <Title text="François Doussin" style={{color: 'red'}}/>
      <h2>Développeur | Formateur</h2>
    </div>
  </header>
);

export default Header;
