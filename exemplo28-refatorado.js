function verificarNumeros(nums) {
    for (let num of nums) {
        if (num%2 === 0) {
            console.log(num + " é par")
        } else {
            console.log(num + " é impar")
        }
    }
}

verificarNumeros([1,2,4,6,7,9]);