import Victor from 'victor';

import Ground from './ground';

import s from '../../assets/settings';
import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Mall extends Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Mall',
        weight = we.mall,
        color = cs.mall
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
        const spent = Math.random() * s.price[1] + s.price[0];
        const n = ~~(Math.random() * s.multipler) * (h.wait / s.patience[1]);

        h.spend(spent * n);

        return {
            spent: spent * n,
            color: this.color,
            name: this.name,
        }
    }
}

export default Mall;
