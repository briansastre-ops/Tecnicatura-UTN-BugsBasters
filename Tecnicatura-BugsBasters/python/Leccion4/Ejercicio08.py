# Ejercicio 8: Menú interactivo - Cajeroautomático.
# Hacer un programa que simule un cajero automático con un saldo inicial de 1.000$ y tendrá el siguiente menú de opciones:
#                                1. Ingresar dinero en la cuenta.
#                                2. Retirar dinero de la cuenta.
#                                3. Mostrar dinero disponible.
#                                4. Salir.
saldo = 1000
while True:
    print("\t.:MENÚ:.")
    print("1. Ingresar dinero en la cuenta.")
    print("2. Retirar dinero de la cuenta.")
    print("3. Mostrar dinero disponible.")
    print("4. Salir.")
    opcion = int(input("Digite una opción del MENÚ: "))
    print() # Representa un salto de línea.
    if opcion == 1:
        extra = float(input("¿Cuánto dinero desea ingresar? -> "))
        saldo += extra
        print(f"Dinero en la cuenta al momento: ${saldo}")
    elif opcion == 2:
        retirar = float(input("¿Cuánto dinero desea retirar? -> "))
        if retirar > saldo:
            print("NO tiene ese cantidad de dinero.")
        else:
            saldo -= retirar
            print(f"Dinero en la cuenta al momento: ${saldo}")
    elif opcion == 3:
        print(f"Dinero en la cuenta al momento: ${saldo}")
    elif opcion == 4:
        print("GRACIAS por utilizar su cajero automático, hasta pronto.")
        break
    else:
        print("ERROR, Se equivocó de opción de MENÚ.")
        print()  # Representa un salto de línea.