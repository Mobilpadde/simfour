import Ground from './ground';
import Bar from './bar';
import Factory from './factory';
import Grass from './grass';
import Hospital from './hospital';
import Mall from './mall';
import Pond from './pond';
import Road from './road';
import Shack from './shack';

import Human from './human';

const mappings = {
    0: Ground,
    b: Bar,
    f: Factory,
    g: Grass,
    h: Hospital,
    m: Mall,
    p: Pond,
    r: Road,
    s: Shack,

    x: () => false,
};

export default mappings;
export { Human };
