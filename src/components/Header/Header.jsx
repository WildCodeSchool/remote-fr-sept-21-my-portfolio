import Title from '../Title/Title';
import picture from '../../assets/img/francoisdoussin.jpg';
import './Header.css';

const Header = () => (
  <header>
    <img src={picture} />
    <div className="Header-information">
      <Title text="François Doussin"/>
      <h2>Développeur | Formateur</h2>
    </div>
  </header>
);

export default Header;
