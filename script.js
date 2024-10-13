// var a=10;
// {   //block code
//     var a = 10;
//   let a1 = 100;
// }


// var a;// varible decclaration
// a="banu" //assigning
// var a=12356 //re-declaration & re-assigning

// let a;
// a=100;
// a=`123568`;
// let a="bhavaniidivya"

// Const a=20000;

// var a=10;
// function a1(){
//     var a=100;
//     console.log(a)
// }
// console.log(a)
// a1();

// var a=10;
// function a1(){
//     var x=100;
// }
// console.log(x)  // x is not defined
// console.log(a)
// a1();

// function a1(){
//     var x=100;
//     console.log(x)
// }
// x="bhavani"
// console.log(x)
// console.log(a)
// a1();

// {
//     let a=10;
//     let b=20;
//     console.log(a)
//     console.log(b)
// }
// console.log(a);
// console.log(b)

// function a(){
    // var a=100;
    function parent(){// out put not defined 
        function child(){
        function subchild(){
            var b=200;
            console.log(a+b)
        }
        subchild()
        // console.log(b)
        // console.log(a+b)
    }
    child()
}
parent();