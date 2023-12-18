// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBeCloseTo(23);
});

test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146,261 yen", function() {

    const yen = fromDollarToYen(3.5);
    
    const expected = 3.5 * 146.261;

    expect(fromDollarToYen(3.5)).toBeCloseTo(510.280); 
})

test("One Yen should be 0,813 pounds", function() {

    const yen = fromYenToPound(3.5);

    const expected = 3.5 * 0.813;

    expect(fromYenToPound(3.5)).toBeCloseTo(2.845); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})