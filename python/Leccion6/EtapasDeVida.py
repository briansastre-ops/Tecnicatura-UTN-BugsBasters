def determinar_etapa_vida(edad):
    """
    Determina la etapa de la vida según la edad.
    """
    if 0 <= edad <= 10:
        return "La infancia es increíble y bella."
    elif 11 <= edad <= 19:
        return "Tienes muchos cambios, mucho que estudiar."
    elif 20 <= edad <= 29:
        return "Amor y comienza el trabajo."
    else:
        return "Para las siguientes etapas, deberás completarlo..."

# Cambia este valor para probar diferentes edades
edad_ingresada = 25  # Por ejemplo, prueba con 5, 15, 25, -1, etc.

if edad_ingresada < 0:
    print("La edad no puede ser un valor negativo.")
else:
    etapa = determinar_etapa_vida(edad_ingresada)
    print(f"Con {edad_ingresada} anios, tu etapa de vida es: {etapa}")