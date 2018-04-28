import Victor from 'victor';
import faker from 'faker';

import Logger from '../logger';

import s from '../../assets/settings';
import sz from '../../assets/size';
import cs from '../../assets/color';

class Human {
    constructor(
        r,
        map,
        v = new Victor(),
        age = 1,
        name = faker.name.firstName(),
        weight = 0,
    ) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.color = cs.human[~~(Math.random() * cs.human.length)];

        this.map = map    
        this.dream = map.dream();
        this.path = [];

        this.wait = 0;
        this.intoxication = 0;

        this.acc = [];

        this.radius = r || sz.radius;

        this.pos = v;
    }

    draw(ctx) {
        const {
            radius,
            age,
            pos,
            color,
        } = this;

        ctx.beginPath();

        ctx.fillStyle = color;
        ctx.arc(pos.x + radius, pos.y + radius, radius * age, 0, Math.PI * 2);
        ctx.fill();
    }

    spend(amount) {
        this.money -= amount;

        if (this.money - amount < 0) {
            amount -= this.money;
        }

        this.money -= amount;
        this.tiredom -= 1;

        if (this.tiredom < 0) {
            this.tiredom = 0; 
        }
    }

    earn(amount) {
        this.money += amount;

        this.tiredom += 1;
    }

    drink(amount) {
        this.intoxication += amount;
    }

    chill(amount) {
        this.intoxication -= amount;
        this.tiredom -= amount;

        if (this.intoxication < 0) {
            this.intoxication = 0;
        }

        if (this.tiredom < 0) {
            this.tiredom = 0;
        }
    }

    reachedPos() {
        const {
            path,
            pos,
            radius,
        } = this;

        if (path.length < 1) {
            return true;
        }

        const d = path[0];
        const v = Victor.fromArray(d);
        v.multiply(new Victor(sz.small.width, sz.small.height));

        if (v.distanceSq(pos) <= radius ** 2) {
            path.splice(0, 1);

            if (path.length < 1) {
                return true;
            }
        }

        return false;
    }

    think() {
        if (this.reachedPos()) {
            this.dream = this.map.dream();
            this.path = this.map.path(this.pos, this.dream.pos);

            this.wait = ~~(Math.random() * s.patience[1] + s.patience[0]);
        }
    }

    move() {
        if (this.wait < 1) {
            if (this.acc.length > 0) {
                Logger.logAcc(this.acc, this);
                this.acc = [];
            }

            const {
                path,
                pos,
                tiredom,
                intoxication,
            } = this; 

            const d = Victor
                .fromArray(path[0])
                .multiply(new Victor(sz.small.width, sz.small.height));

            let x = d.x < pos.x ? -s.speed : s.speed;
            let y = d.y < pos.y ? -s.speed : s.speed;

            if (tiredom > s.tiredom || intoxication > s.intoxication) {
                if (Math.random() > 0.5) {
                    x += Math.random() - 0.5 * (tiredom * intoxication);
                } else {
                    y += Math.random() - 0.5 * (tiredom * intoxication);
                }
            }

            this.pos = pos.add(new Victor(x, y));
        } else {
            this.wait -= 1;

            if (Math.random() > 0.5) {
                this.acc.push(this.dream.action(this));
            }
        }
    }
}

export default Human;
