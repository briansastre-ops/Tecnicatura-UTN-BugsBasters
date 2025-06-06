'''Leer 10 num e imprimir cuantos son positivos, negativos y neutros'''

numPositivos = 0
numNegativos = 0
numNeutros = 0

for i in range(10):
    num = int(input("Digite un número: "))
    if num == 0:
        numNeutros += 1
    elif num >= 1:
        numPositivos += 1
    else:
        numNegativos += 1

print(f"La cantidad de números positivos es: {numPositivos}")
print(f"La cantidad de números negativos es: {numNegativos}")
print(f"La cantidad de números neutros es: {numNeutros}")