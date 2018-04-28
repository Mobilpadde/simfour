import Victor from 'victor';

import sz from '../../assets/size';
import cs from '../../assets/color';
import we from '../../assets/weight';

class Ground {
    constructor(
        w,
        h,
        v = new Victor(),
        name = 'Ground',
        weight = we.ground,
        color = cs.ground
    ) {
        this.name = name;
        this.weight = weight;
        this.color = color;

        this.width = w || sz.small.width;
        this.height = h || sz.small.height;

        this.pos = v;
    }

    draw(ctx) {
        const {
            width,
            height,
            pos,
            color,
        } = this;

        ctx.beginPath();

        ctx.fillStyle = color;
        ctx.fillRect(pos.x, pos.y, width, height);
    }

    action() {
        return {};
    }
}

export default Ground;
