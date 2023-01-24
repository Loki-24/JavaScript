// using for loop
let a = [1,2,3,4,5,10,20,30,6]
for(i=0;i<=8;i+=1){
    if (a[i]%2==0) {
        console.log(a[i])
    }
}

// using while loop
let b = [1,2,3,4,5,10,20,30,6]
var i = 0
while (i<=8){
    if (a[i]%2==0){
        console.log(a[i])
    }
    i++
}
// using Do-While loop
let c = [1,2,3,4,5,10,20,30,6]
var i=0
do{
    if (a[i]%2==0){
        console.log(a[i])
    }
}while(1<=8);