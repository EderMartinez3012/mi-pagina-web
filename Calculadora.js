while (true) {
    let num1 = parseFloat(prompt("Ingrese primer número"))
    let num2 = parseFloat(prompt("Ingrese segundo número"))

    let operacion = prompt("Ingresar operación")
    
    alert(realizarOperacion(num1, num2, operacion))
    
    let salir = prompt("¿Desea continuar?")

    if (salir === "salir") {
        break
    } else{
        
    }
    
}

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2
    } else if (operacion === "resta") {
        return num1 - num2
    } else if (operacion === "multiplica") {
        return num1 * num2
    } else if (operacion === "divide") {
        return num1 / num2
    }
}
