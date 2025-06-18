i = 1
suma = 0

while i <= 5:
    print(f"Salario del empleado {i}: ")
    horas = int(input("Introduzca las horas trabajadas: "))
    tarifa = int(input("Introduzca la tarifa por hora: "))
    salario = suma + tarifa
    print(f"El salario es: {salario}")
    suma = suma + salario
    i = i + 1

print(f"La suma de todos los salarios es: {suma}")