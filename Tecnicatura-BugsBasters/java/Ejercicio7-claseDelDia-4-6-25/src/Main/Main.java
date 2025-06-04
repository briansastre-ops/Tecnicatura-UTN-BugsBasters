/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Main;

/**
 *
 * @author brian
 */
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Declaramos el sueldo fijo como constante
        final double SUELDO_FIJO = 1000.0;
        final double COMISION_POR_CARRO = 150.0;
        final double PORCENTAJE_VENTAS = 0.05;

        // Pedimos los datos al usuario
        System.out.print("Ingrese la cantidad de carros vendidos: ");
        int cantidadCarros = scanner.nextInt();

        System.out.print("Ingrese el valor total de las ventas: ");
        double valorVentas = scanner.nextDouble();

        // Calculamos el salario
        double salario = SUELDO_FIJO + (COMISION_POR_CARRO * cantidadCarros) + (PORCENTAJE_VENTAS * valorVentas);

        // Mostramos el resultado
        System.out.println("El salario mensual del vendedor es: $" + salario);
    }
}
