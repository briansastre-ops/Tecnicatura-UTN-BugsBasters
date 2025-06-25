import java.util.Scanner;

public class ConversorHoras {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== CONVERSOR DE HORAS ===");
        System.out.println("Convierte horas totales a semanas, días y horas");
        System.out.println();
        
        // Solicitar el número total de horas
        System.out.print("Ingrese el número total de horas: ");
        int horasTotales = scanner.nextInt();
        
        // Validar que el número sea positivo
        if (horasTotales < 0) {
            System.out.println("Error: El número de horas debe ser positivo.");
            return;
        }
        
        // Realizar los cálculos
        int semanas = horasTotales / 168;  // 1 semana = 7 días × 24 horas = 168 horas
        int horasRestantes = horasTotales % 168;
        
        int dias = horasRestantes / 24;    // 1 día = 24 horas
        int horas = horasRestantes % 24;
        
        // Mostrar el resultado
        System.out.println();
        System.out.println("=== RESULTADO ===");
        System.out.println("Horas totales: " + horasTotales);
        System.out.println("Equivale a: " + semanas + " semanas, " + dias + " días y " + horas + " horas");
        
        // Mostrar desglose del cálculo
        System.out.println();
        System.out.println("=== DESGLOSE DEL CÁLCULO ===");
        System.out.println("• Semanas: " + horasTotales + " ÷ 168 = " + semanas + " (resto: " + (horasTotales % 168) + ")");
        System.out.println("• Días: " + horasRestantes + " ÷ 24 = " + dias + " (resto: " + (horasRestantes % 24) + ")");
        System.out.println("• Horas restantes: " + horas);
        
        // Verificación
        int verificacion = (semanas * 168) + (dias * 24) + horas;
        System.out.println("• Verificación: (" + semanas + " × 168) + (" + dias + " × 24) + " + horas + " = " + verificacion);
        
        scanner.close();
    }
}