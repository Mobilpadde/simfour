import Victor from 'victor';

import Ground from './ground';

import s from '../../assets/settings';
import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Shack extends Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Shack',
        weight = we.shack,
        color = cs.shack
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

    action(h) {
        const n = ~~(Math.random() * s.multiplier) * (h.wait / s.patience[1]);

        h.chill(n);

        return {
            chill: n,
            color: this.color,
            name: this.name,
        }
    }
}

export default Shack;
