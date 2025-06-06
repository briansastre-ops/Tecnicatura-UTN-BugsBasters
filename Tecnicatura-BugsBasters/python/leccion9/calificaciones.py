'''Realizar un algoritmo para calcular la calificación promedio
y la calificación más baja del grupo de 10 alumnos'''

suma = 0
califBaja = 9999

for i in range(10):
    calif = int(input("Digite una calificación: "))
    suma += calif
    if calif < califBaja:
        califBaja = calif

califPromedio = suma / 10
print(f"La calificación promedio es: {califPromedio}")
print(f"La calificación más baja es: {califBaja}")