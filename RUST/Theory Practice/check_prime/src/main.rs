fn main() {
    is_prime(25);
    is_prime(1);
    is_prime(5);
    is_prime(7);
    is_prime(9);
}

fn is_prime(num: i32) {
    if num % 2 == 0 {
        if num % 3 == 0 {
            println!("This {} is a prime number!",num );
        }
        else{
            println!("{} Not a prime number",num);
        }
    }
    else {
        println!("{} Not a prime number",num);
    }
    }


