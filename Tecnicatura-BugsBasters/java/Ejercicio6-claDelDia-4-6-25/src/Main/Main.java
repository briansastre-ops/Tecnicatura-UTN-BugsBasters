/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Main;

/**
 *
 * @author brian
 */import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedimos cuánto dinero tiene Guillermo
        System.out.print("Ingrese cuánto dinero tiene Guillermo: ");
        double guillermo = scanner.nextDouble();

        // Calculamos lo que tienen Luis y Juan
        double luis = guillermo / 2;
        double juan = (guillermo + luis) / 2;

        // Calculamos el total
        double total = guillermo + luis + juan;

        // Mostramos el resultado
        System.out.println("Entre los tres tienen: $" + total);
    }
}
