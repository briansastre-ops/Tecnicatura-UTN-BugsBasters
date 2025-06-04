/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author brian
 */
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Crear el Scanner para leer datos del usuario
        Scanner scanner = new Scanner(System.in);

        // Pedir al usuario las calificaciones
        System.out.print("Ingrese la primera calificación: ");
        double calificacion1 = scanner.nextDouble();

        System.out.print("Ingrese la segunda calificación: ");
        double calificacion2 = scanner.nextDouble();

        System.out.print("Ingrese la tercera calificación: ");
        double calificacion3 = scanner.nextDouble();

        // Calcular la suma
        double suma = calificacion1 + calificacion2 + calificacion3;

        // Mostrar el resultado
        System.out.println("La suma de las tres calificaciones es: " + suma);
    }
}
