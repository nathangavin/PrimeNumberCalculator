

fn main() {
    let mut previous_primes: Vec<u32> = vec![2,3];

    let addrs: [u32; 2] = [1,5];
    for i in 1..=10000 as u32 {
        for addr in addrs {
            let candidate: u32 = 6*i + addr;
            if is_prime(candidate, &previous_primes) {
                previous_primes.push(candidate);
            }
        }
    }

    for prime in previous_primes {
        println!("{prime}");
    }
}


fn is_prime(candidate: u32, previous_primes: &Vec<u32>) -> bool {
    let mut is_prime = true;
    let sqrt = f32::floor(f32::sqrt(candidate as f32)) as u32;

    for prime in previous_primes {
        if prime > &sqrt { break; }
        if candidate % prime == 0 {
            is_prime = false;
            break;
        }
    }

    return is_prime;
}