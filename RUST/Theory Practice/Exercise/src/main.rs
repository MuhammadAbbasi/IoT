fn main() {
    // let hello = "Hello Wold!!";
    // let hello1 = hello;
    // println!("{}",hello);
    
    // let hello = String::from("Hello Wolrd!!!!!");
    // let hello1 = hello.clone();
    // println!("{}",hello);

    let string = "Hello World!";
    println!("{:p}", string);
    foo(string);

}


fn foo(string:&str){
    println!("{:p}", string);
}