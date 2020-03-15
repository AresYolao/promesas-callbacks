import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [
    'capi',
    'iron',
    'spider'
];

const heroesPromesas = heroesIds.map(id => buscarHeroe(id));


export const obtenerHeroesArr = async() => {

    const heroesArr = [];
    for (const id of heroesIds) {
        heroesArr.push(buscarHeroe(id));

    }

    return await Promise.all(heroesArr);
}


export const obtenerHeroesAwait = async(id) => {
    try {

        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('CATCH!!');
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }

    }


}


export const heroesCiclo = async() => {
    console.time('heroesCiclo');

    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }
    // const heroes = await Promise.all(heroesPromesas);
    // console.log(heroes);
    console.timeEnd('heroesCiclo')
}

export const heroeIfAwait = async(id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'IronMan') {
        console.log('Es el mejor');
    } else {
        console.log('naaaa');
    }
}