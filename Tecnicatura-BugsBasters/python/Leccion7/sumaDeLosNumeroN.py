n = int(input("Ingrese la cantidad de números a sumar: "))
suma = 0

for i in range(1, n + 1):
    suma += i

print(f"La suma de los {n} primeros números es: {suma}")

