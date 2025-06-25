import java.util.Scanner;

public class CuadradoSuma {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== CALCULADORA DEL CUADRADO DE UNA SUMA ===");
        System.out.println("Fórmula: (a + b)² = a² + b² + 2*a*b");
        System.out.println();
        
        // Solicitar los valores de a y b
        System.out.print("Ingrese el valor de 'a': ");
        double a = scanner.nextDouble();
        
        System.out.print("Ingrese el valor de 'b': ");
        double b = scanner.nextDouble();
        
        // Calcular usando la fórmula desarrollada: a² + b² + 2*a*b
        double aCuadrado = Math.pow(a, 2);
        double bCuadrado = Math.pow(b, 2);
        double dosAB = 2 * a * b;
        double resultadoFormula = aCuadrado + bCuadrado + dosAB;
        
        // Calcular directamente: (a + b)²
        double suma = a + b;
        double resultadoDirecto = Math.pow(suma, 2);
        
        // Mostrar los resultados
        System.out.println();
        System.out.println("=== RESULTADOS ===");
        System.out.println("Valores ingresados:");
        System.out.println("• a = " + a);
        System.out.println("• b = " + b);
        System.out.println();
        
        System.out.println("Cálculo usando la fórmula desarrollada:");
        System.out.println("• a² = " + a + "² = " + aCuadrado);
        System.out.println("• b² = " + b + "² = " + bCuadrado);
        System.out.println("• 2*a*b = 2 × " + a + " × " + b + " = " + dosAB);
        System.out.println("• a² + b² + 2*a*b = " + aCuadrado + " + " + bCuadrado + " + " + dosAB + " = " + resultadoFormula);
        System.out.println();
        
        System.out.println("Cálculo directo:");
        System.out.println("• (a + b)² = (" + a + " + " + b + ")² = " + suma + "² = " + resultadoDirecto);
        System.out.println();
        
        // Verificar que ambos métodos dan el mismo resultado
        if (Math.abs(resultadoFormula - resultadoDirecto) < 0.0001) {
            System.out.println("✓ VERIFICACIÓN: Ambos métodos dan el mismo resultado");
        } else {
            System.out.println("✗ ERROR: Los resultados no coinciden");
        }
        
        System.out.println();
        System.out.println("=== DEMOSTRACIÓN DE LA FÓRMULA ===");
        System.out.println("La fórmula (a + b)² = a² + b² + 2*a*b es correcta porque:");
        System.out.println("(a + b)² = (a + b) × (a + b)");
        System.out.println("         = a×a + a×b + b×a + b×b");
        System.out.println("         = a² + ab + ab + b²");
        System.out.println("         = a² + 2ab + b²");
        System.out.println("         = a² + b² + 2*a*b");
        
        scanner.close();
    }
}