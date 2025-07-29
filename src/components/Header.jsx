import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p style={{
          color: 'red',
          textAlign: 'left'
          /// For styles with dashes either omit dashes and write in camelCase or wrapped in single quotes (''), though it's recommended to use camelCase
      }}>A community of artists and art-lovers.</p>
    </header>
  );
}
