import * as testImg from '../img/home-02-850x669.jpg';
import { ChpState } from '../interfaces';

const INITIAL_STATE: ChpState = {
    images: [
        {
            right: true,
            src: testImg,
            text: `
            Beat the Heat During the Extremely
            Hot Summer!
            `,
        },
        {
            right: false,
            src: testImg,
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
