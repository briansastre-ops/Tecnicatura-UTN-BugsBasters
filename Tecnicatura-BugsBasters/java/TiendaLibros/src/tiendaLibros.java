/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Luly
 */
import java.util.Scanner;
 
public class tiendaLibros {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el nombre del libro:");
        String nombreLibro = scanner.nextLine();//Guarda el nombre del libro

        System.out.println("Ingrese el ID del libro:");
        int idLibro = scanner.nextInt();//Guarda el ID del libro

        System.out.println("Ingrese el precio del libro:");
        double precioLibro = scanner.nextDouble();//Guarda el precio del libro

        scanner.nextLine(); 

        System.out.println("¿El envío es gratuito? (si/no):");
        String respuesta = scanner.nextLine();
        
        //si la respuesta es si mostrara "true"
        boolean envioGratuito = respuesta.equalsIgnoreCase("si") || respuesta.equalsIgnoreCase("true");

        System.out.println("\n--- Datos del Libro ---");
        System.out.println("Nombre: " + nombreLibro);
        System.out.println("ID: " + idLibro);
        System.out.println("Precio: $" + precioLibro);
        System.out.println("Envío Gratuito?: " + envioGratuito);
    
    }
    }
