/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Luly
 */
import java.util.Scanner;

public class Ejercicio5 {
     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Ingrese una calificación: ");
        double calif1 = scanner.nextDouble();//Guarda la 1ra calificación

        System.out.print("Ingrese la segunda calificación: ");
        double calif2 = scanner.nextDouble();//Guarda la 2da calificación

        System.out.print("Ingrese la tercera calificación: ");
        double calif3= scanner.nextDouble();//Guarda la 3ra calificación

        // Sumamos las calificaciones
        double suma = calif1 + calif2 + calif3;

        // Muestra el resultado
        System.out.println("La suma de las tres calificaciones es: " + suma);
    }
}