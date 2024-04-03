import orca from '@/public/orca.jpeg'
import fridayChaser from '@/public/friday-chaser.JPG'

export const getImage = (imgString) => {
    switch(imgString) {
        case 'orca':
            return orca;
        case 'friday-chaser':
            return fridayChaser;
        default:
            return;
    }
}