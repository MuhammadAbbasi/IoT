fn main() {
    let mut a  = 0;
    loop {
        
        let mut b = a;
        while (a<=6) & (b>=0){
            print!("*");
            b = b - 1;
        }
        println!("  ");
        a = a + 1;
        if a==6 {
            break;
        }
    }

}
