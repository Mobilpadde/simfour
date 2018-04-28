import Color from 'color';

class Logger {
    static log(hex, whom, text) {
        const c = [
            new Color(hex[0]),
            new Color(hex[1]),
        ];
        const bw = [
            c[0].isLight() ? '#000' : '#fff',
            c[1].isLight() ? '#000' : '#fff',
        ];

        console.log(
            '%c%s%c %s',
            `background:${hex[1]};color:${bw[1]}`,
            whom,
            `background:${hex[0]};color:${bw[0]}`,
            text
        );
    }

    static earn(hex, whom, amount, at) {
        Logger.log(
            hex,
            whom,
            `earned $${amount.toFixed(2)} from working at the ${at}`
        );
    }

    static spend(hex, whom, amount, at) {
        Logger.log(
            hex,
            whom,
            `spent $${amount.toFixed(2)} at the ${at}`
        );
    }

    static chill(hex, whom, amount, at) {
        Logger.log(
            hex,
            whom,
            `chilled for ${amount.toFixed(0)}hr at the ${at}`
        );
    }

    static drink(hex, whom, amount, at) {
        Logger.log(
            hex,
            whom,
            `drank ${amount.toFixed(0)} beers at the ${at}`
        );
    }

    static logAcc(acc, h) {
        const amount = acc.reduce((acc, a) => {
            if (a.hasOwnProperty('spent')) {
                acc += a.spent;
            }

            if (a.hasOwnProperty('earned')) {
                acc += a.earned;
            }

            if (a.hasOwnProperty('chill')) {
                acc += a.chill;
            }

            if (a.hasOwnProperty('drank')) {
                acc += a.drank;
            }

            return acc;
        }, 0);

        if (amount > 0) {
            const f = acc[0];

            if (f.hasOwnProperty('spent')) {
                Logger.spend([f.color, h.color], h.name, amount, f.name);
            }

            if (f.hasOwnProperty('earned')) {
                Logger.earn([f.color, h.color], h.name, amount, f.name);
            }

            if (f.hasOwnProperty('chill')) {
                Logger.chill([f.color, h.color], h.name, amount, f.name);
            }

            if (f.hasOwnProperty('drank')) {
                Logger.drink([f.color, h.color], h.name, amount, f.name);
            }
        }
    } 
}

export default Logger;
