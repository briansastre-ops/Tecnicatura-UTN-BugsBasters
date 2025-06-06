#sentencia if/else
'''condicion = False
if condicion ==True:
    print("Condivion verdadera")
elif condicion== False:
    print("Condicion falsa")
else:
    print("condicion sin especificar")'''

     #conversión de numero a texto
     
num=int(input("Digite un numero dentro del rango de 1 a 3: "))
numTexto= ''
if num ==1:
    numTexto="Número uno"
elif num ==2:
    numTexto="Número dos"
elif num==3:
    numTexto="Número tres"
else:
    numTexto="Has ingresado un número fuera de rango"

print(f"El número ingresado es {num} {numTexto}")