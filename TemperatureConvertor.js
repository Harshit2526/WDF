function convertTemperature(temp, unit) {
    if (unit.toLowerCase() === "c") {
        const fahrenheit = (temp * 9 / 5) + 32;
        console.log(`${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else if (unit.toLowerCase() === "f") {
        const celsius = (temp - 32) * 5 / 9;
        console.log(`${temp}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
        console.log("Invalid unit. Use C for Celsius or F for Fahrenheit.");
    }
}
convertTemperature(273, "F");
convertTemperature(0, "C");
convertTemperature(20, "K");