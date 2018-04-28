import Victor from 'victor';

import Ground from './ground';

import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Pond extends Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Pond',
        weight = we.pond,
        color = cs.pond
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

export default Pond;
