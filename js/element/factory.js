import Victor from 'victor';

import Ground from './ground';

import s from '../../assets/settings';
import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Factory extends Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Factory',
        weight = we.factory,
        color = cs.factory
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
        const e = Math.random() * s.wage;
        const n = ~~(Math.random() * s.multiplier) * (h.wait / s.patience[1]);

        h.earn(e * n);

        return {
            earned: e * n,
            color: this.color,
            name: this.name,
        }
    }
}

export default Factory;
