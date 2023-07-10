import iconOne from '../assets/img/image13.png';
import iconTwo from '../assets/img/image8.png';
import iconThree from '../assets/img/image12.png';
import iconFour from '../assets/img/image10.png';

interface LatestData {
        name: string;
        img: string;
}

export const latestData:LatestData[] = [
    {
        name:'give flower',
        img: iconOne
    },
    {
        name:'dancing bunny',
        img: iconTwo
    },
    {
        name:'holding a cat like a baby',
        img: iconThree
    },
    {
        name:'kitty in a heart',
        img: iconFour
    },
];