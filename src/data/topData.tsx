import imgOne from '../assets/img/image34.png';
import imgTwo from '../assets/img/image16.png';
import imgThree from '../assets/img/image36.png'


interface TopData {
    name: string;
    img: string;
    num: number
}

export const topData:TopData[]= [
    {
        name:'cat surprise in bed',
        img: imgOne,
        num: 30,
    },
    {
        name:'cat with angry thick eyebrow',
        img: imgTwo,
        num: 30,
    },
    {
        name:'dancing',
        img: imgThree,
        num: 30,
    },

]