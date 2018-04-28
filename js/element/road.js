import Victor from 'victor';

import Ground from './ground';

import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Road extends Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Road',
        weight = we.road,
        color = cs.road
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

export default Road;
