import './styles.css';
import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'
import { buscarHeroe, buscarHeroeAsync } from './js/promesas'

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(mensaje => console.log(mensaje));

buscarHeroe('cap2').then(console.log).catch(console.warn);
buscarHeroeAsync('iron').then(console.log).catch(console.warn);