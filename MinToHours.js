function MinToHours(min) {
    const hours = Math.floor(min / 60);
    const remainingMinutes = min % 60;
    console.log(`The conversion of ${min} min in hours and minutes is: ${hours} hours and ${remainingMinutes} minutes.`)
}
MinToHours(200);