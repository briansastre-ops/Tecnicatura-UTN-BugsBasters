def determinar_estacion(mes):
  """
  Determina la estación del año según el número del mes.

  Args:
    mes: Un entero representando el número del mes (1-12).

  Returns:
    Una cadena con el nombre de la estación o un mensaje de error si el mes no es válido.
  """
  if 1 <= mes <= 3:
    return "Verano"
  elif 4 <= mes <= 6:
    return "Otoño"
  elif 7 <= mes <= 9:
    return "Invierno"
  elif 10 <= mes <= 12:
    return "Primavera"
  else:
    return "Mes inválido. Por favor, ingrese un número entre 1 y 12."

# Pedir al usuario que ingrese el número del mes
try:
  mes_ingresado_str = input("Ingrese un número de mes (entre 1 y 12): ")
  mes_ingresado = int(mes_ingresado_str)

  # Determinar la estación y mostrar el resultado
  estacion = determinar_estacion(mes_ingresado)
  print(f"El mes {mes_ingresado} corresponde a la estación: {estacion}")

except ValueError:
  print("Entrada inválida. Por favor, ingrese un número entero.")