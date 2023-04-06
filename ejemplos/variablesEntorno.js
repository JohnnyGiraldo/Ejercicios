let saludo = process.env.NOMBRE || 'VSencillo'
let city = process.env.CITY || 'Manizales'
console.log(`welcome ${saludo} you are from ${city}`)