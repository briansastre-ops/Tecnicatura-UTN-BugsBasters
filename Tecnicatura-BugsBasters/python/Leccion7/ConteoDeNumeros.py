conteo_positivos = 0
conteo_negativos = 0
conteo_neutros = 0

for i in range(10):
    num = int(input(f"Ingrese el número {i + 1}: "))
    
    if num > 0:
        conteo_positivos += 1
    elif num < 0:
        conteo_negativos += 1
    else:
        conteo_neutros += 1

print(f"Positivos: {conteo_positivos}")
print(f"Negativos: {conteo_negativos}")
print(f"Neutros: {conteo_neutros}")
