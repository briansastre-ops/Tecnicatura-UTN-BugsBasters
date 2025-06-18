num = int(input("Digite un número: "))

while num < 0:
    print("Error, su número debe ser 0 o mayor a él")
    num = int(input("Digite un número: "))

i = 1
factorial = 1

while i <= num:
    factorial = factorial * i
    i = i + 1


print(f"El factorial es: {factorial}")