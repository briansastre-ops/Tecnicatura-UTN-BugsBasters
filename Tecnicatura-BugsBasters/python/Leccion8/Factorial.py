# Ejercicio 5: Calcular el factorial de un número mayor o igual a 0.
# Clase del dia 9/06/2025
def calcular_factorial():
    print("Proceso Ejercicio5")

    # Definir num como Entero
    # Definir i, factorial como Entero

    # Digite un número:
    while True:
        try:
            num = int(input("Digite un número: "))
            if num >= 0:  # Validar que el número sea mayor o igual a 0
                break
            else:
                print("El número debe ser mayor o igual a 0.")
        except ValueError:
            print("Entrada inválida. Por favor, digite un número entero.")

    i = 1
    factorial = 1

    # Bucle para calcular el factorial
    # Esto se corresponde con la fórmula: 1 * 2 * 3 * ... * N
    while i <= num:
        factorial = factorial * i
        i = i + 1

    print(f"El factorial es: {factorial}")
    print("FinProceso")

# Llamar a la función para ejecutar el programa
calcular_factorial()