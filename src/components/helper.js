export function getYearDifference(year) {
    return new Date().getFullYear() - year;
}

//calculating the total depending on the brand

export function calculateBrand(brand) {
    let increase;
    switch(brand){
       case 'european':
           increase = 1.30;
        break;
        case 'american':
            increase = 1.15;
        break;
        case 'asian':
            increase = 1.05;
        break;
        default:
            break;
    }
    return increase;
}

//calculate type of coverage

export function calculateCoverage(coverage) {
    return (coverage === 'basic') ? 1.20 : 1.50;
}

//uppercase first letter
export function firstUppercase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}