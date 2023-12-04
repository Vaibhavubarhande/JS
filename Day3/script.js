// ------------------Even numbers upto 100

let a = 1;

while (a<=10) {
    if(a%2==0){
        console.log(a);
    }
    a++;
}


// ------------Template literals

let obj = {
    item : "Pen",
    price : 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;

console.log(output);


let sum =  `The sum of the given numbers is ${1+2+3}`;
console.log(sum);


let str = "vaibhav";
let s = str.toUpperCase();
console.log(s);
console.log(s.replace("V", "W")  );
console.log(s.charAt(2));


// Promt the user to enter their full name. generate a username for them based on the InputDeviceInfo. start the username with @as, followed by their full name and ending with the fullname lenght

let u = prompt("Enter your full name");
let n = "@" +u+u.length;
console.log(n);
