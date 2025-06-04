num = int(input("Digite un número del 1 al 5: "))
numTexto = ''
if num == 1:
    numTexto = 'Número uno'
elif num == 2:
    numTexto = 'Número dos'
elif num == 3:
    numTexto = 'Número tres'
elif num == 4:
    numTexto = 'Número cuatro'
elif num == 5:
    numTexto = 'Número cinco'
else:
    numTexto = 'Número no encontrado'
print(f'El número ingresado es: {num} - {numTexto}')