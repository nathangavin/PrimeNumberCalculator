import java.util.ArrayList;

public class PrimeNumberCalculator {

    public static void main(String[] args) {

        ArrayList<Integer> primeValues = new ArrayList<>();

        int topNum = 100000;

        for (int primeCandidate = 2; primeCandidate < topNum; primeCandidate++) {


            boolean passesBasic = true;

            for (int j = 2; j < 10; j++) {
                if (primeCandidate % j == 0 && primeCandidate != j) {
                    passesBasic = false;
                    break;
                }
            }

            boolean passesComplex = true;

            if (passesBasic && primeValues.size() > 0) {


                // get subset of prime numbers where largest is no larger than 1/3 of candidate

                int component = 3;
                int length = primeValues.size();
                int index = length / component;
                int value = primeValues.get(index);
                int c = primeCandidate / component;
                if (value < c) {
                    for (int i = length / component; i < length; i++) {
                        int x = primeValues.get(i);
                        if (x <= value) {
                            index = i;
                            break;
                        }
                    }
                }


                for (int i = 0; i <= index; i++) {
                    if (primeCandidate % primeValues.get(i) == 0) {
                        passesComplex = false;
                        break;
                    }
                }
            }

            if (passesBasic && passesComplex) {
                primeValues.add(new Integer(primeCandidate));
                System.out.println(primeValues.size() + " --- " + primeCandidate);

            }

        }
    }
}
