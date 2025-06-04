/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package infolibro;

/**
 *
 * @author brian
 */
import java.util.Scanner; // Importar Scanner

public class LibroApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in); // Crear objeto Scanner

        System.out.print("Ingrese el nombre del libro: ");
        String nombreLibro = entrada.nextLine(); // Leer el nombre del libro

        System.out.print("Ingrese el nombre del autor: ");
        String nombreAutor = entrada.nextLine(); // Leer el nombre del autor

        // Mostrar resultado
        System.out.println(nombreLibro + " fue escrito por " + nombreAutor);
    }
}
