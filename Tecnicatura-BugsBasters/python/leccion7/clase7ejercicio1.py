'''perdir al usuario que ingrese un mes con los numeros del 1 al 12
y decirle en que estacion del año esta'''

mes = int(input("Ingrese el número del mes del año en el que se encuentra: "))

if mes == 1 or mes == 2 or mes == 3:
    print("Usted esta en Verano")
elif mes == 4 or mes == 5 or mes == 6:
    print("Usted esta en Otoño")
elif mes == 7 or mes == 8 or mes == 9:
    print("Usted esta en Invierno")
elif mes == 10 or mes == 11 or mes ==12:
    print("Usted esta en Primavera")
else:
    print("No dijito un número correcto")

