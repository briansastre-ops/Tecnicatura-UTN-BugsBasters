# Inicializamos la suma total de salarios
suma_salarios = 0

# Repetimos el proceso para 5 personas
for i in range(1, 6):
    print(f"\nPersona {i}:")
    horas = float(input("Ingrese las horas trabajadas: "))
    tarifa = float(input("Ingrese la tarifa por hora: "))
    
    salario = horas * tarifa
    print(f"Salario de la persona {i}: ${salario:.2f}")
    
    # Acumulamos el salario
    suma_salarios += salario

# Mostramos la suma total de los salarios
print(f"\nLa suma de todos los salarios es: ${suma_salarios:.2f}")
