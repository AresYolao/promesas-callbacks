import './styles.css';
import { obtenerHeroesArr } from './js/await'

obtenerHeroesArr().then(console.table);