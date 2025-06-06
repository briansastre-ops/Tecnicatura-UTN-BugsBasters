'''Calcular la suma de "N" primeros números'''

num = int(input("Digite la cantidad de números a sumarse: "))
suma = 0
for i in range(num):
    suma += i
    print(f"La suma es: {suma}")