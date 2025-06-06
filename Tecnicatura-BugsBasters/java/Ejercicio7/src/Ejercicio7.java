
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Luly
 */
public class Ejercicio7 {
     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Declaramos el sueldo fijo como constante
        final double sueldo = 1000.0;
        final double comision = 150.0;
        final double porcentaje = 0.05;

        // Pedimos los datos al usuario
        System.out.print("Ingrese la cantidad de carros vendidos: ");
        int carros = scanner.nextInt();

        System.out.print("Ingrese el valor total de las ventas: ");
        double valorVentas = scanner.nextDouble();

        // Calculamos el salario
        double salario = sueldo  + (comision * carros) + (porcentaje * valorVentas);

        // Mostramos el resultado
        System.out.println("El salario mensual del vendedor es: $" + salario);
    }
}

