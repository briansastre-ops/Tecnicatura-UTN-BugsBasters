'''
Ejercicio 4:
Hacer un programa para ingresar el radio de un circulo
y que se reporte su área y la longitud de la
circunferencia'''
import math

radio =int(input("Ingrese el radio de su circulo: "))
area = math.pi * (radio * 2)
perimetro = 2 * (math.pi * radio)

print(f"El area de su circulo es de: {area}")
print(f"El perimetro de su círculo es de : {perimetro}")