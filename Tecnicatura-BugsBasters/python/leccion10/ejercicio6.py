cantidad = int(input("Digite la cantidad de elementos a ingresar: "))

i = 1
sumaP = 0
numP = 0
sumaI = 0
numI = 0
promedio = 0

for i in range(cantidad):
    num= int(input("Digite un número: "))
    if num % 2 == 0:
        sumaP =  sumaP + num
        numP = numP + 1
    else:
        sumaI = sumaI + num
        numI = numI + 1

if numP == 0:
    print("No se han digitado números pares")
else:
    print(f"La suma de los números pares es: {sumaP}")
    print(f"El conte de los números pares es: {numP}")

if numI == 0:
    print("No se han digitado números impares")
else:
    promedio = sumaI/numI
    print(f"El promedio de números impares es: {promedio}")