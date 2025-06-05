
#ejercicio: valor dentro de un rango
valor =int(input("Digite un número: "))
valorMinimo = 0
valorMaximo = 5
dentroRango = valor >= valorMinimo and valor <= valorMaximo
if dentroRango:
    print(f"El valor {valor} esta dentro del rango")
else:
    print(f"El valor {valor} NO esta dentro del rango")


#ejercicio: rango entre 20 y 30 años
edad =int(input("Digite su edad: "))
veinte = edad >= 20 and edad < 30
print(veinte)
treinta = edad >= 30 and edad <40
print(treinta)

if veinte or treinta:
    print("Estas dentro del rango de los (20\'0) a (30\'0) años")
else:
    print("NO estas dentro del rango de los (20\'0) a (30\'0) años")


