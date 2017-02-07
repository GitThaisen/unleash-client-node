import { Strategy } from '../strategy';
import { Context } from '../context';

export class GradualRolloutRandomStrategy extends Strategy {
    constructor () {
        super('gradualRolloutRandom');
    }

    isEnabled (parameters: any, context: Context) {
        const percentage = +parameters.percentage;
        const random = Math.round(Math.random() * 100);
        return percentage >= random;
    }
}
