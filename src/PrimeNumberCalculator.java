import java.util.LinkedList;

public class PrimeNumberCalculator {

    public static void main(String[] args) {

        LinkedList<Integer> primeValues = new LinkedList<>();

        int topNum = 1000000;

        for (int primeCandidate = 2; primeCandidate < topNum; primeCandidate++) {

            // get subset of prime numbers where largest is no larger than 1/3 of candidate

            boolean passesBasic = true;

            for (int j = 2; j < 10; j++) {
                if (primeCandidate % j == 0 && primeCandidate != j) {
                    passesBasic = false;
                    break;
                }
            }

            boolean passesComplex = true;

            if (passesBasic && primeValues.size() > 0) {

                for (Integer formerPrime : primeValues) {
                    if (primeCandidate % formerPrime == 0) {
                        passesComplex = false;
                        break;
                    }
                }
            }

            if (passesBasic && passesComplex) {
                System.out.println(primeCandidate);
                primeValues.add(new Integer(primeCandidate));
            }

        }
    }
}
