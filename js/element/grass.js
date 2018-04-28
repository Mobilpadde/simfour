import Victor from 'victor';

import Ground from './ground';

import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Grass extends Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Grass',
        weight = we.grass,
        color = cs.grass
    ) {
        super(
            w,
            h,
            v,
            name,
            weight,
            color
        )
    }

    action() {
        return {};
    }
}

export default Grass;
