class Aritmetica:
    """
    El nombre de este tipo de comentarios es: DocString.
    Esto es documentación de la clase en Python.
    Vamos hacer en esta clase algunas operaciones de: suma, resta, multiplicación y más.
    """

    def __init__(self, operandoA, operandoB):
        self.operandoA = operandoA
        self.operandoB = operandoB

    # Método para sumar:
    def sumar(self):
        return self.operandoA + self.operandoB

    # Método para restar:
    def resta(self):
        return self.operandoA - self.operandoB

    # Método para multiplicar:
    def multiplicar(self):
        return self.operandoA * self.operandoB

    # Método para dividir:
    def dividir(self):
        return self.operandoA / self.operandoB

aritmetica1 = Aritmetica(7, 9) # Le pasamos los argumentos para los operandos.
print(aritmetica1.sumar())
print(f'La suma de los números es: {aritmetica1.sumar()}')
print(f'La resta de los números es: {aritmetica1.resta()}')
print(f'La multiplicación de los números es: {aritmetica1.multiplicar()}')
print(f'La división de los números es: {aritmetica1.dividir():.2f}')