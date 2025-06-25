import java.util.Scanner;

public class CalificacionFinal {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== CALCULADORA DE CALIFICACIÓN FINAL ===");
        System.out.println("Ponderaciones: Participación 10%, Parcial 1: 25%, Parcial 2: 25%, Final: 40%");
        System.out.println();
        
        // Solicitar calificaciones
        System.out.print("Participación: ");
        double participacion = scanner.nextDouble();
        
        System.out.print("Primer Parcial: ");
        double primerParcial = scanner.nextDouble();
        
        System.out.print("Segundo Parcial: ");
        double segundoParcial = scanner.nextDouble();
        
        System.out.print("Examen Final: ");
        double examenFinal = scanner.nextDouble();
        
        // Calcular calificación final
        double calificacionFinal = (participacion * 0.10) + (primerParcial * 0.25) + 
                                  (segundoParcial * 0.25) + (examenFinal * 0.40);
        
        // Mostrar resultado
        System.out.println();
        System.out.printf("CALIFICACIÓN FINAL: %.2f\n", calificacionFinal);
        
        // Estado académico
        if (calificacionFinal >= 60) {
            System.out.println("Estado: APROBADO");
        } else {
            System.out.println("Estado: REPROBADO");
        }
        
        scanner.close();
    }
}