

module.exports.calculateCircleCircumference = (radius) => {
    let pi = 3.14
    let circumference = 2 * pi * radius
    console.log("Yarıçapı " + radius + " olan dairenin çevresi: " + circumference )
}

module.exports.calculateCircleArea = (radius) =>  {
    let pi = 3.14
    let area = pi * (radius) * (radius)
    console.log("Yarıçapı " + radius + " olan dairenin alanı: " + area )
}
