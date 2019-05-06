// use std::io;

// fn main() {
//     // print!("Enter number:");
//     let mut num = String::new();
    
//     io::stdin().read_line(&mut num);
//     let cube:u32 = num.trim().parse().unwrap();
//     println!("ube of {} is {}",num,cube_of_number(cube) );

// }

// fn cube_of_number(num: u32) -> u32 {
//     num*num*num
// }

fn main() {
    let s = String::from("hello");

    change(s);
    
}

fn change(mut some_string: String) {
    some_string.push_str(", world");
    println!("{}", some_string);
}
