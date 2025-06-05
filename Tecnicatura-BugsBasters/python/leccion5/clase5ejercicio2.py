#ejercicio: tienda de libros
print("Digite los siguientes datos del libro")
nombre =input("Digite el nombre del libro: ")
id =int(input("Digite el ID del libro: "))
precio =int(input("digite el precio del libro: "))
envioGratuito =input("Indicar si el envio es gratuito (true/false: ")

if envioGratuito == "true" :
    envioGratuito = True
elif envioGratuito == "false":
    envioGratuito = False
else:
    envioGratuito = "El valor es incorrecto, debe escribir true/false"

print(f'''
        nombre: {nombre}
        id: {id}
        precio: {precio}
        Envio Gratuito?: {envioGratuito}
''')