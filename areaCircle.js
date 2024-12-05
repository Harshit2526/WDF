function calculateCircleArea(radius) {
    if (radius <= 0) {
        return "Radius should be positive.";
    }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

const radius = 5;
const area = calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);