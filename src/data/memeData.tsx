import imgOne from '../assets/img/image1.png';
import imgTwo from '../assets/img/image25.png';
import imgThree from '../assets/img/image22.png'


interface MemesData {
    name: string;
    img: string;
}

export const memeData:MemesData[]= [
    {
        name:'cat surprise in bed',
        img: imgOne
    },
    {
        name:'cat with angry thick eyebrow',
        img: imgTwo
    },
    {
        name:'dancing',
        img: imgThree
    },

]