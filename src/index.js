import './styles/index.scss';
import {
    getPoem
} from './APIreqs'

document.addEventListener('DOMContentLoaded', () => {
    let retrieved = false

    if (retrieved === false) {
        debugger
        getPoem();
        debugger
        retrieved = true
    }

    
    
    
})

