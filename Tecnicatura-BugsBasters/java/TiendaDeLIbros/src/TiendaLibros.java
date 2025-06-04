/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author brian
 */import java.util.Scanner;

public class TiendaLibros {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el nombre del libro:");
        String nombreLibro = scanner.nextLine();

        System.out.println("Ingrese el ID del libro:");
        int idLibro = scanner.nextInt();

        System.out.println("Ingrese el precio del libro:");
        double precioLibro = scanner.nextDouble();

        scanner.nextLine(); // Consumir salto de línea pendiente

        System.out.println("¿El envío es gratuito? (sí/no):");
        String respuesta = scanner.nextLine();
        boolean envioGratuito = respuesta.equalsIgnoreCase("sí") || respuesta.equalsIgnoreCase("true");

        System.out.println("\n--- Datos del Libro ---");
        System.out.println("Nombre: " + nombreLibro);
        System.out.println("ID: " + idLibro);
        System.out.println("Precio: $" + precioLibro);
        System.out.println("Envío Gratuito?: " + envioGratuito);
    }
}
