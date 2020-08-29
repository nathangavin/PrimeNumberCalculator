# Welcome to my prime number calculator project

The purpose of this project is mainly for me to get a small amount of practice in various programming languages. 

Also I was interested in calculating pi.



## The algorithm

The standard algorithm used in all the code so far is as follows:

- candidate = 5
- prime numbers = [2,3]
- topNum = 100000, or any number really
- following prime rule where P is in set 6n +1,5
  - while candidate is less than topNum
    - if isPrime(candidate, primes) returns TRUE
      - add candidate to list of prime numbers
      - print candidate
    - add 2 to the value of candidate
    - if isPrime(candidate,primes) returns TRUE
      - add candidate to list of prime numbers
      - print candidate
    - add 4 to value of candidate
  - end while 
- function isPrime(candidate value, array of previous prime numbers)
  - isPrime = TRUE
  - sqrt = square root of candidate
  - loop over array of primes
    - if primes[i] is greater than sqrt
      - break
    - if candidate modulus primes[i] = 0 and candidate does not = primes[i]
      - isPrime = FALSE
      - break
  - return isPrime



## Running code

