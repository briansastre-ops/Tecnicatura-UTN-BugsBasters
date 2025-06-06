

calif = int(input("Ingrese su calificación: "))

if calif == 9 or calif == 10:
    print("Su calificación es: A")
elif 8 <= calif < 9:
    print("Su calificación es: B")
elif 7 <= calif < 8:
    print("Su calificación es: C")
elif 6 <= calif < 7:
    print("Su calificación es: D")
elif 0 <= calif < 6:
    print("Su calificación es: F")
else:
    print("El valor ingresado es incorrecto (0-10)")