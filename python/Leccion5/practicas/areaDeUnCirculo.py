import math

# Pedimos al usuario que ingrese el radio del círculo
try:
    radio_str = input("Ingrese el radio del círculo: ")
    radio = float(radio_str)

    if radio < 0:
        print("El radio no puede ser un valor negativo.")
    else:
        # Calculamos el área
        area = math.pi * radio**2

        # Calculamos la longitud de la circunferencia
        longitud = 2 * math.pi * radio

        # Mostramos los resultados
        print(f"Para un círculo con radio = {radio}:")
        print(f"El área es: {area:.2f}")  # Formateamos a 2 decimales
        print(f"La longitud de la circunferencia es: {longitud:.2f}") # Formateamos a 2 decimales

except ValueError:
    print("Entrada inválida. Por favor, ingrese un número para el radio.")