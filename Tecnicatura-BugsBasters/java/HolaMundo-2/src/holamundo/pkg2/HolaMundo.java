/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package holamundo.pkg2;

import java.util.Scanner;

/**
 *
 * @author brian
 */
public class HolaMundo {
    public static void main(String[] args) {
     //  System.out.println("Hola Mundo Desde Java");
        
      // int miVariable = 10;
      //  System.out.println(miVariable); // Muestra 10
        
      //  miVariable = miVariable - 5; // Ahora miVariable vale 5
       // System.out.println(miVariable); // Muestra 5
        
       // String miVariableCadena = "Bienvenidos";
       // System.out.println(miVariableCadena);
        
        //miVariableCadena = "Sigamos creciendo en programación";
       // System.out.println(miVariableCadena);
        
        //Hasta Aca es al clase 1 y 2 ---->Despues de este comentario arranca la clase Numero 3//
        
        
        //--->var ->inferencia de tipos en Java
      // var miVaribleEntera2 = 10;
        //var miVariableCadena2 = "Seguimos Estudiando";
        
       // System.out.println("miVariableCadena2 = " + miVariableCadena2);
        //System.out.println("miVariableEntera2 = " + miVaribleEntera2);
        /*
            * Palabras reservadas en Java:
            * Estas palabras tienen un significado especial para el compilador y no pueden ser usadas como identificadores.

           abstract    continue    for         new         switch
           assert      default     goto        package     synchronized
           boolean     do          if          private     this
           break       double      implements  protected   throw
           byte        else        import      public      throws
           case        enum        instanceof  return      transient
           catch       extends     int         short       try
           char        final       interface   static      void
           class       finally     long        strictfp    volatile
           const       float       native      super       while
         */

        //---Video2.4 Reglas para difinir una variable en Java
        
        
        //var miVariableEjemplo = 45;
        
        
       //---->VIdeo 2.5 concatenacion :Ejercicio
       
       
       //var usuario= "brian";
      // var titular ="tecnico";
       //var union = titular +  ""  + usuario;
       //System.out.println(" union = " + union);
       
       //var a = 8;
       //var b =4;
       //System.out.println(usuario + (a +b));
       
       ///=>Video 2.6 Caracteres especiales 
      // var nombre = "macarena";

       // System.out.println("\nNueva línea: \n" + nombre); // Diagonal inversa y letra n (salto de línea)
       // System.out.println("Tabulador: \t" + nombre);     // Tabulador: espacio horizontal
       // System.out.println("\t\t.:MENÚ:.");               // Múltiples tabuladores
       // System.out.println("Retroceso: \b\b" + nombre);   // Retroceso: borra caracteres anteriores
        //System.out.println("Comillas simples: \'" + nombre + "\'");
       // System.out.println("Comillas Dobles: \"" + nombre + "\"");
       
        
        ////===>Video 2.7 clase Scanner
         //Clase Scanner;
        //Scanner entrada = new Scanner(System.in); // Se crea el objeto para leer desde consola

        //var usuario2 = "Carlos"; // Variable con inferencia de tipo
        //System.out.println("usuario2 = " + usuario2); // Imprime el valor de usuario2
        
        
        ////===>Video 2.8 clase 
        
        //Scanner entrada = new Scanner(System.in);

        //System.out.print("Digite su nombre: ");
        //var usuario2 = entrada.nextLine(); // Lee una línea de texto

      // System.out.println("usuario2 = " + usuario2);

        //System.out.print("Escriba el título: ");
        
        
        ////-----> clase 4 video3.2 tipos de numeros enteros 
        
        // Tipo byte
       // byte numEnteroByte = 127;
       // System.out.println("numEnteroByte = " + numEnteroByte);
       // System.out.println("Valor mínimo del byte: " + Byte.MIN_VALUE);
       // System.out.println("Valor máximo del byte: " + Byte.MAX_VALUE);

        // Tipo short
       // short numEnteroShort = 32767;
        //System.out.println("numEnteroShort = " + numEnteroShort);
       // /System.out.println("Valor mínimo del short: " + Short.MIN_VALUE);
       // System.out.println("Valor máximo del short: " + Short.MAX_VALUE);

        // Tipo int
        //int numEnteroInt = 10;
       // System.out.println("numEnteroInt = " + numEnteroInt);
       // System.out.println("Valor mínimo del int: " + Integer.MIN_VALUE);
        //System.out.println("Valor máximo del int: " + Integer.MAX_VALUE);
        
        
        ///---> Tipos Flotantes Ejercicos videoo 3.3
        
         // Tipo float
       // float numFloat = 3.4028235E38F;
       // System.out.println("numFloat = " + numFloat);
       // System.out.println("El valor mínimo de float: " + Float.MIN_VALUE);
       // System.out.println("El valor máximo de float: " + Float.MAX_VALUE);

        // Tipo double
       // double numDouble = 1.7976931348623157E308;
        //System.out.println("numDouble = " + numDouble);
       // System.out.println("El valor mínimo de double: " + Double.MIN_VALUE);
        //System.out.println("El valor máximo de double: " + Double.MAX_VALUE);
        
        //5.1 Inferencia de tipos con var y tipos primitivos
        // Inferencia de tipos con var y tipos primitivos
       // var numEntero = 20; // Se infiere como int
       // System.out.println("numEntero = " + numEntero);

       // var numFloat = 10.0F; // Se infiere como float (nota la F)
        //System.out.println("numFloat = " + numFloat);

        //var numDouble = 10.0; // Se infiere como double
        //System.out.println("numDouble = " + numDouble);
        
        //    5.2 Tipo Primitivo char Parte 2    ULTIMA CLASE HABILITADA 12/5/25
        
          // Usando código Unicode
        char varCaracter = '\u0024'; // Unicode para el símbolo $
        System.out.println("varCaracter = " + varCaracter);

        // Usando valor decimal del juego de caracteres
        char varCaracterDecimal = 36; // Decimal del símbolo $
        System.out.println("varCaracterDecimal = " + varCaracterDecimal);

        // Usando símbolo directamente
        char varCaracterSimbolo = '$';
        System.out.println("varCaracterSimbolo = " + varCaracterSimbolo);

        // Otro ejemplo con conversión explícita
        char varCaracter1 = '\u0024';
        System.out.println("varCaracter1 = " + varCaracter1);

        char varCaracterDecimal2 = (char)36;
        System.out.println("varCaracterDecimal2 = " + varCaracterDecimal2);

        char varCaracterSimbolo2 = '$';
        System.out.println("varCaracterSimbolo2 = " + varCaracterSimbolo2);

        // Conversión de char a int
        int varEnteroChar = '$';
        System.out.println("varEnteroChar = " + varEnteroChar); // Devuelve 36 (ASCII)

        // Conversión de int a char
        int caracterChar = 36;
        System.out.println("caracterChar = " + (char)caracterChar); // Muestra $

        
    }
}
