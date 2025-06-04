def es_bisiesto(anio):
    return (anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0)

while True:
    try:
        anio = int(input("Ingrese un año: "))
        if es_bisiesto(anio):
            print("¡El año es bisiesto!")
        else:
            print("El año no es bisiesto.")
    except ValueError:
        print("Por favor, ingrese un número válido.")
    
    opcion = input("¿Desea verificar otro año? (s/n): ").lower()
    if opcion != 's':
        print("Programa finalizado.")
        break
    print("Por favor, ingrese un número válido.")