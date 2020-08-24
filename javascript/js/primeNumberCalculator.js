
document.addEventListener('DOMContentLoaded', function() {
    const EventHandler = {
        events: {},
        on: function(eventName, fn) {
            this.events[eventName] = this.events[eventName] || [];
            this.events[eventName].push(fn);
        },
        off: function(eventName, fn) {
            if (this.events[eventName]) {
                let length = this.events[eventName].length;
                for (let i = 0; i < length; i++) {
                    if (this.events[eventName][i] === fn) {
                        this.events[eventName].splice(i, 1);
                        break;
                    }
                }
            }
        },
        trigger: function(eventName, data) {
            if (this.events[eventName]) {
                let length = this.events[eventName].length;
                for (let i = 0; i < length; i++) {
                    this.events[eventName][i](data);
                }
            }
        }
    };

    function printPrime(pos, prime) {
        let string = pos + ' -- ' + prime;
        console.log(string);
        let row = document.createElement('h3');
        row.innerHTML = string;
        let container = document.getElementById('number_container');
        container.innerHTML = '<h3>' + string + '</h3>'
        // container.appendChild(row);
    }

    function passesBasic(candidate, val) {
        if (candidate % val === 0 && candidate !== i) {
            return false;
        } else if (val === 9) {
            return true;
        } else {
            return passesBasic(candidate, val++);
        }
    }

    function getComponentPrime(value, prevPrimes, position) {
        if (position === prevPrimes.length - 1) {
            return position;
        } else if (prevPrimes[position] > value) {
            let i = position - 1;
            return i;
        } else {
            return getComponentPrime(value, prevPrimes, position++);
        }
    }

    function compareCandidateWithPrime(candidate, prevPrimes, position, index) {
        if (candidate % prevPrimes[position] === 0) {
            return false;
        } else if (index === position) {
            return true;
        } else {
            return compareCandidateWithPrime(candidate, prevPrimes, position++, index);
        }
    }

    function passesComplex(candidate, prevPrimes) {
        let component = 9;
        let length = prevPrimes.length;
        let value = candidate/component;
        let index = getComponentPrime(value, prevPrimes, 0);
        return compareCandidateWithPrime(candidate, prevPrimes, 0, index);
    }

    function isPrime(candidate, prevPrimes) {
        if (passesBasic(candidate, 0)) {
            if (prevPrimes.length > 0) {
                return passesComplex(candidate, prevPrimes);
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function buildPrimes(candidate, maxValue, prevPrimes) {
        prevPrimes = prevPrimes || [];
        if (isPrime(candidate, prevPrimes)) {
            prevPrimes.push(candidate);
            printPrime(prevPrimes.length, candidate);
        }
        if (candidate === maxValue) {
            return prevPrimes;
        } else {
            return buildPrimes(candidate++, maxValue, prevPrimes);
        }
    }

    function calculatePrimeNumbers(maxValue) {
        // tail end recursion - but isnt currently supported by chrome v8 js engine so pretty pointless
        // functional programming approach
        // buildPrimes(2, maxValue, []);

        let primes = [2];
        printPrime(primes.length, 2);
        for (let primeCandidate = 3; primeCandidate < maxValue; primeCandidate += 2) {
            let passesBasic = true;
            let passesComplex = true;
            for (let i = 2; i < 10; i++) {
                if (primeCandidate % i === 0 && primeCandidate !== i) {
                    passesBasic = false;
                    break;
                }
            }
            let length = primes.length;
            if (passesBasic && length > 0) {
                let component = 9;
                let value = primeCandidate/component;
                let index;
                for (let i = 0; i < length; i++) {
                    if (value < primes[i]) {
                        index = i - 1;
                        break;
                    }
                }
                for (let i = 0; i <= index; i++) {
                    if (primeCandidate % primes[i] === 0) {
                        passesComplex = false;
                        break;
                    }
                }
            }
            if (passesBasic && passesComplex) {
                primes.push(primeCandidate);
                printPrime(primes.length, primeCandidate);
            }
        }
    }

    EventHandler.on('button_click', calculatePrimeNumbers);

    let button = document.getElementById('start_calculating');
    button.addEventListener('click', function() {
        EventHandler.trigger('button_click', 100000);
    });
});

