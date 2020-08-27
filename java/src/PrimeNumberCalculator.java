import java.util.ArrayList;
import java.lang.Math;

public class PrimeNumberCalculator {

    public static void main(String[] args) {

        ArrayList<Integer> primeValues = new ArrayList<>();

        int topNum = 10000000;

        primeValues.add(2);
        primeValues.add(3);

        int candidate = 5;

        while (candidate < topNum) {
            if (isPrime(candidate, primeValues)) {
                primeValues.add(candidate);
                System.out.println(primeValues.size() + " --- " + candidate);
            }

            candidate += 2;

            if (isPrime(candidate, primeValues)) {
                primeValues.add(candidate);
                System.out.println(primeValues.size() + " --- " + candidate);
            }

            candidate += 4;
        }

    }

    private static boolean isPrime(int candidate, ArrayList<Integer> primeValues) {
        boolean isPrime = true;

        double sqrt = Math.sqrt((double) candidate);

        int length = primeValues.size();

        for (int i = 0; i < length; i++) {
            int val = primeValues.get(i);
            if (val > sqrt) {
                break;
            } else if (candidate % val == 0 && candidate != val) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }
}
