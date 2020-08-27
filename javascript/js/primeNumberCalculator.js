
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
    }

    function isPrime(candidate, primes) {
        let isPrime = true;
        let sqrt = Math.sqrt(candidate);
        let length = primes.length;
        for (let i = 0; i < length; i++) {
            let val = primes[i];
            if (val > sqrt) {
                break;
            } else if (candidate % val === 0 && candidate !== val) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    function calculatePrimeNumbers(maxValue) {

        let primes = [2];
        printPrime(primes.length, 2);
        primes.push(3);
        printPrime(primes.length, 3);
        
        let candidate = 5;

        while (candidate < maxValue) {
            if (isPrime(candidate, primes)) {
                primes.push(candidate);
                printPrime(primes.length, candidate);
            } 
            candidate += 2;
            if (isPrime(candidate, primes)) {
                primes.push(candidate);
                printPrime(primes.length, candidate);
            }
            candidate += 4;
        }
    }

    EventHandler.on('button_click', calculatePrimeNumbers);

    let button = document.getElementById('start_calculating');
    button.addEventListener('click', function() {
        EventHandler.trigger('button_click', 100000);
    });
});

