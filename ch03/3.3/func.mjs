import { odd, even } from './var';

function checkOddOrEven(num) {
    if (num % 2) {
        return odd; // 홀수면
    }
     return even;
}

export default checkOddOrEven;