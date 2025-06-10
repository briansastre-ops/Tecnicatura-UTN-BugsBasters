# Ejercicio 6:
# Determina si los números de una lista son pares o impares,
# y cuenta cuántos de cada tipo hay.
# # Clase del dia 9/06/2025
# Ejercicio 6 en Python

# Pedimos al usuario cuántos números quiere ingresar
n = int(input("¿Cuántos números deseas ingresar?: "))

# Inicializamos acumuladores y contador
suma_pares = 0
suma_impares = 0
multiplos_de_5 = 0

# Bucle para leer los N números
for i in range(n):
    numero = int(input(f"Ingrese el número {i+1}: "))

    # Clasificamos el número como par o impar
    if numero % 2 == 0:
        suma_pares += numero
    else:
        suma_impares += numero

    # Verificamos si es múltiplo de 5
    if numero % 5 == 0:
        multiplos_de_5 += 1

# Mostramos los resultados
print("\nResultados:")
print(f"Suma de los números pares: {suma_pares}")
print(f"Suma de los números impares: {suma_impares}")
print(f"Cantidad de múltiplos de 5: {multiplos_de_5}")
