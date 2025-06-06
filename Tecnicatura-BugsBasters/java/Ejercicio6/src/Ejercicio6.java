
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author Luly
 */
public class Ejercicio6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese cuanto dinero tiene Guillermo:");
        double guillermo = scanner.nextDouble();//Guarda el total del dinero de guillermo
        
        double luis = guillermo / 2; //Calcula el dinero de luis
        double juan = (guillermo + luis) / 2;//calcula el dinero de juan
        
        //Calculamos el total de la suma del dinero de los tres
        double total = guillermo + luis + juan;
                
        //muestra el total
        System.out.println("Entre los tres tienen: $" + total);        
        
        
    }
    
}
