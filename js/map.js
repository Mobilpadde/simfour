import { Grid, AStarFinder } from 'pathfinding';

import sz from '../assets/size';

class Map {
    constructor(map) {
        this.map = map;

        this.grid = new Grid(map.weighted);
        this.f = new AStarFinder();
    }

    path(v1, v2) {
        const {
            width,
            height,
        } = sz.small;

        return this.f.findPath(
            ~~(v1.x / width),
            ~~(v1.y / height),
            ~~(v2.x / width),
            ~~(v2.y / height),
            this.grid.clone()
        );
    }

    dream() {
        return this.map.dreams[~~(Math.random() * this.map.dreams.length)];
    }
}

export default Map;
