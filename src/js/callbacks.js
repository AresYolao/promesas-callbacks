const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Super Fuerza'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Super Cerebro'
    },
    spider: {
        nombre: 'SpiderMan',
        poder: 'Sentido arácnido'
    }
}



export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un heroe con el id ${id}`);
    }
    // callback(heroe);
}