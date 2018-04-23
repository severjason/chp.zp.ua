import * as airConditioningImg from '../img/img2.jpg';
import { ChpState } from '../interfaces';

const INITIAL_STATE: ChpState = {
    images: [
        {
            right: true,
            src: airConditioningImg,
            text: `
            Beat the Heat During the Extremely
            Hot Summer!
            `,
        },
        {
            right: false,
            src: airConditioningImg,
            text: `
            Beat the Heat During the Extremely
            Hot Summer2!
            `,
        }
    ]
};

export default function rootReducer(state: ChpState = INITIAL_STATE) {
    return state;
}
