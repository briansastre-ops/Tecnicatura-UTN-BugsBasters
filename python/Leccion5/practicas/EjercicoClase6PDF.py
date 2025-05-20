resultado_parte1 = (3 + 5 * 8) < 3
resultado_parte2 = ((-6 / 3 * 4) + 2) < 2
resultado_parte_and = resultado_parte1 and resultado_parte2

print(f"Resultado de la primera parte ((3 + 5 * 8) < 3): {resultado_parte1}")
print(f"Resultado de la segunda parte (((-6 / 3 * 4) + 2) < 2): {resultado_parte2}")
print(f"Resultado de la parte con 'and': {resultado_parte_and}")

# Para la parte final con 'or' y 'a > b', necesitaríamos definir los valores de a y b
a = 5
b = 2
resultado_final = resultado_parte_and or (a > b)
print(f"Considerando a = {a} y b = {b}, el resultado final es: {resultado_final}")

a = 1
b = 5
resultado_final = resultado_parte_and or (a > b)
print(f"Considerando a = {a} y b = {b}, el resultado final es: {resultado_final}")