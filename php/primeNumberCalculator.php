<?php 

    function isPrime($candidate, $primes) {
        $isPrime = TRUE;
        $sqrt = sqrt($candidate);
        $length = count($primes);
        for ($i = 0; $i < $length; $i++) {
            $val = $primes[$i];
            if ($val > $sqrt) {
                break;
            } else if ($candidate % $val === 0 && $candidate !== $val) {
                $isPrime = FALSE;
                break;
            }
        }

        return $isPrime;
    }

    function echoPrime($number, $prime) {
        echo $number . " - " . $prime . "\n";
    }

    $maxValue = 10000000;
    $primes = [];
    $primes[] = 2;
    echoPrime(count($primes), $primes[0]);
    $primes[] = 3;
    echoPrime(count($primes), $primes[1]);

    $candidate = 5;

    while ($candidate < $maxValue) {
        if (isPrime($candidate, $primes)) {
            $primes[] = $candidate;
            echoPrime(count($primes), $candidate);
        } 
        $candidate += 2;
        if (isPrime($candidate, $primes)) {
            $primes[] = $candidate;
            echoPrime(count($primes), $candidate);
        }
        $candidate += 4;
    }

?>