import Victor from 'victor';

import Canvas from './canvas';
import Map from './map';
import mapping, { Human } from './element';

import sz from '../assets/size'; 
import mapObj from '../assets/map'; 

const mainCanvas = new Canvas('main', sz.small.width * mapObj[0].length, sz.small.height * mapObj.length);
mainCanvas.append();

const mainCtx = mainCanvas.getContext();

const elms = mapObj.reduce((acc, arr, y) => {
    acc.weighted.push(arr.map((m, x) => {
        const mapped = new mapping[m](sz.small.width, sz.small.height, new Victor(sz.small.width * x, sz.small.height * y));
        acc.map.push(mapped);

        if (m === 's') {
            acc.shack.push(mapped);
        }

        if (mapped.weight < 1) {
            acc.dreams.push(mapped);
        }

        return mapped.weight;
    }));

    return acc;
}, {
    map: [],
    weighted: [],
    shack: [],
    dreams: [],
});
const map = new Map(elms);

const peeps = new Array(5).fill(0).map(() => {
    const idx = ~~(Math.random() * elms.shack.length);
    const home = elms.shack.splice(idx, 1)[0];

    return new Human(
        sz.radius,
        map,
        home.pos.clone(),
        0.5 + Math.random() * 0.5
    )
});

const live = () => {
    elms.map.forEach((e) => e.draw(mainCtx));

    peeps.forEach((p) => {
        p.think();
        p.move();
        p.draw(mainCtx);
    });

    window.requestAnimationFrame(live);
};

window.requestAnimationFrame(live);
