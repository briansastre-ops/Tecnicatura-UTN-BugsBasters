
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Luly
 */
public class LibroAutor {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        
        System.out.print("Ingrese el nombre del libro: ");
        String nombreLibro = entrada.nextLine(); // Introduce el nombre del libro
        
        System.out.print("Ingrese el nombre del autor: ");
        String nombreAutor = entrada.nextLine(); // Introduce el nombre del autor
        
        System.out.println(nombreLibro + " fue escrito por " + nombreAutor);//resultado
    }
    
}
