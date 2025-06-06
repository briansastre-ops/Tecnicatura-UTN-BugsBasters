'''Diseñar un programa que ingresando un año,nos devuleva
por consola si es bisiesto o no, repetir la accion hasta que
el usuario lo decida'''

print("Comprobamos que año es bisiesto")
num = int(input("Introduzca el año: "))
if ((num % 4 == 0) and (num % 100 != 0) or num % 400 == 0):
    print("El año es Bisiesto")
else:
    print("El año NO es Bisiesto")