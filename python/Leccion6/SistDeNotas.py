def asignar_calificacion(nota):
  """
  Asigna una letra de calificación según la nota numérica.

  Args:
    nota: Un número entero o flotante representando la calificación (0-10).

  Returns:
    Una cadena con la letra de calificación o un mensaje de error si la nota no es válida.
  """
  if 9 <= nota <= 10:
    return "A"
  elif 8 <= nota < 9:
    return "B"
  elif 7 <= nota < 8:
    return "C"
  elif 6 <= nota < 7:
    return "D"
  elif 0 <= nota < 6:
    return "F"
  else:
    return "Valor ingresado incorrecto"

# Pedir al usuario que ingrese la calificación
try:
  nota_str = input("Ingrese una calificación entre 0 y 10: ")
  nota_ingresada = float(nota_str)

  # Asignar la calificación y mostrar el resultado
  calificacion = asignar_calificacion(nota_ingresada)
  print(f"Para la nota {nota_ingresada}, la calificación es: {calificacion}")

except ValueError:
  print("Entrada inválida. Por favor, ingrese un número.")