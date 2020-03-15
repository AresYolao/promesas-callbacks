import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas';
const heroeId = 'capi'
const heroeId2 = 'iron!'
    // buscarHeroe(heroeId, (err, heroe) => {

//     if (err) {
//         console.error(err);
//     } else {

//         console.info(heroe);
//     }
// });
// buscarHeroe(heroeId).then(heroe => {
//     // console.log(`Enviando a ${heroe.nombre}a la mision`);
//     buscarHeroe(heroeId2).then(heroe2 => {

//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
//     })
// })

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    }).catch(err => {
        alert(err);
    }).finally(() => {
        console.log('Se termino la busqueda');
    })

console.log('Fin del programa');