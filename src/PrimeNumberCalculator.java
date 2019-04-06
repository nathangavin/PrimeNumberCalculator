import java.util.LinkedList;

public class PrimeNumberCalculator {

    public static void main(String[] args) {

        LinkedList<Integer> primeValues = new LinkedList<>();

        int topNum = 1000000;

        for (int primeCandidate = 2; primeCandidate < topNum; primeCandidate++) {

            boolean passesBasic = true;

            for (int j = 2; j < 10; j++) {
                if (passesBasic && primeCandidate % j == 0 && primeCandidate != j) {
                    passesBasic = false;
                }
            }

            boolean passesComplex = true;

            if (passesBasic && primeValues.size() > 0) {

                for (Integer formerPrime : primeValues) {
                    if (primeCandidate % formerPrime == 0) {
                        passesComplex = false;
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
