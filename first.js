

// const student = {
//     full_name : 'chirag sankhe',
//     age : 24,
//     cgpa : 5.4,

// };

// student ["age"] = 25;

// console.log(student);

// practice question 1

// const product = {
//     product_name : "pen",
//     rating : 5555,
//     mrp : 10,
//     star :"****"
// }

//    const product = {
//     product_name :"cello",
//     rating  : 4.5,
//     color : "red, blue",
//     mrp : 10 
//    }
//  console.log(product);

//  pratice set 2 

// const profile ={
//     user_name : "chirag sankhe ",
//     followers : "145K",
//     following : 2000,
//     post : 555,
//     message : "always smile"
//     }

//     console.log(profile);


// const profile = {

//     user_name:"chirag manoj sankhe",
//     follow : true,
//     post : 1245,
//     followers:"546K",
//     name : "chirag sankhe",
//     collage_name : "vidhyavardhinis collage of enginerring"
// }

// console.log(profile);

//  opraters 

// let a = 29;
// let b = 2;

// console.log("addition" , a + b);
// console.log("subtraction" , a - b);
// console.log("multiplication" , a * b);
// console.log("divition" , a / b);

// // conditins

// // practice question 1

// let age = 21;

// if(age > 18 )
//     {
//         console.log("you can vote");
        
//     }
//     else{
//         console.log("you are not able to vote");
//     }

//     // practice question 2

//     let wather = "moon";
//     let color;

//     if(wather == "sunny")
//         {
//             color="yello";
//         }
//         else{
//             color = "white";
//         }

//         console.log(color);

//         practice question 3

//         let x = 1;

//         if(x%2 == 0 )
//             {
//                 console.log("x is even no ");

//             }
//             else{
//                 console.log("odd no ");
//             }


//             practice question 4

//             let age2 = 23;

//             if(age2 <18)
//                 {
//                     console.log("junior");
//                 }
//                 else if (age2>18 & age2<29) {
//                     console.log("senior");

//                 }
//                 else
//                 {
//                     console.log("married");;
//                 }

//                  practice question 5

//                 let name = "chirag";
//                let result =  name =="prachi" ? " true" : "false";

//                console.log(result);

//                 switch statement 

//             let grade = "B";
//             let result2;

//             switch (grade)
//             {
//                 case 'A':
//                 result2 = "marks >90";
//                 break;


//                 case 'B':
//                     result2 = "markas > 80";
//                     break;

//                     case 'c':
//                     result2 = "markas > 70";
//                     break;

//                     default:
//                         result2 = "less than 70";
//             }

//             console.log(result2);

//             _______________________ 1 __________________

//             let roll_no = prompt("enter a n0"  ) ;

//             if(roll_no % 5 == 0)
//                 {
                    
//                     console.log("roll_no is multipal of 5");
//                 }
//                 else {
//                     console.log("roll_no is not  multipal of 5");
//                 }

//                 _______________________ 2 __________________


//                   let scores = prompt("enter your scores:");
//                  let grades ;

                 

//                     if (scores>=80 & scores<=100){
//                         grades = "A";
//                     }

                    
                    
//                     else if (scores>=70 & scores<=79)
//                     {
//                         grades = "B";

//                     }
//                     else if (scores>=60 & scores<=69)
//                 {
//                     grades = "C";

//                 }
//                      else if (scores>=50 & scores<=59)
//                      {
//                         grades = "D";

//                      }
//                      else
//                      {
//                         grades = "F";

//                      }

//                  console.log(grades);

              
  // -------------------------  loop --------------------

                // let v = prompt("enter a no " ) ;

                // for(let i = 1 ;i<=v;i++)
                //     {
                //         console.log("hello chirag" + i);
                //     }

                // ----------------------- while loop -------------------

                // let v = prompt("enter a no " ) ;

                // let i = 1 ;

                // while(i<=v)
                //     {
                //         console.log("i=" + i);
                //         i++;
                //     }
                

                //-------------------- do while loop ------------------

                // let v = prompt("enter a no " ) ;
                // let i = 1;

                // do{
                //     console.log("i = " + i);
                //     i++;
                // }
                // while(i<=v);
                    
                // ------------------ for of loop -------------

                // let n = ["chirag","prachi","prajal","yadnesh","manoj"];

                // let text = "";

                // for(let x of n)
                // {
                //     text = x;
                //     console.log(text);
                // }

                // print a;; even no frpm 0 to 100

                // for(let i = 0 ;i<=100;i++)
                //     {
                //         if(i%2 ==0)
                //             {
                //                 console.log(i);
                //             }
                //     }

                    // create a game where you start with any random numbert 

                    // let game_n = 45;

                    // let user_guess = prompt("my guess no ");

                    // if(game_n == user_guess)
                    //     {
                    //         prompt("correct ");
                    //     }
                    //     else{
                    //         prompt("worng");
                    //     }

// ---------------------------  string ------------------
                            

                            //   let sankhe_f = {
                            //     father:  "manoj",
                            //     mather: " manisha",
                            //     daughter1 : "pranjal",
                            //     daughter2: " prachi",
                            //     son:"chirag"

                            //   };

                            //   let sankhe_family = `in sankhe family i m a father ${sankhe_f.father} and mother is ${sankhe_f.mather} with i have 2 daughter ${sankhe_f.daughter1} AND ${sankhe_f.daughter2} or i have 1 son name is ${sankhe_f.son}. `;

                            //   console.log(sankhe_family);

                            //   string method


                        //     let str = "chirag manoj";
                        //     let str2 = " sankhe";
                        //     // uppercase
                        //     console.log(str.toUpperCase());
                        //     // lower case
                        //     console.log(str.toLowerCase());
                        //     // string trim
                        //     console.log(str.trim());
                        //     // string slice
                        //     console.log(str.slice(0,5));
                        //     // string concat 
                        //     console.log(str.concat(str2));
                        //     // replace
                        //     console.log(str.replace("chirag","prachi"));

                        //     // pratice question 

                        //     let f_name = prompt("enter full name ");
                        //     let length = f_name.length;

                        //    let username = "@" + f_name + f_name.length;
                        //    console.log(username);

// -----------------------------  array ------------------------ 
                         
                // let arr1 = [1,2,3,4,5,6,7,8,9];

                // for(let i = 0 ;i<arr1.length;i++)
                //     {
                //         console.log(i + "="+ arr1[i]);
                //     }

                    //  practice question 1 

                    // let marks = [85,97,44,37,76,60];

                    // let sum = 0;
                    

                    // for(let i=0;i<marks.length;i++)
                    //     {
                    //         sum +=  marks[i];

                    //     }

                    //     let avg = sum /marks.length;
                    //     console.log(avg);

                    // q2

                    // let price = [250,645,300,900,50];

                    // for(let i = 0 ;i<=price.length;i++)
                    //     {
                    //         let offer = price[i]/10;
                    //         console.log( price[i]," in offer " , price[i]-offer);
                    //     }



//  --------array-------------- push(add) -----------pop(delete from end) ------------ toString -------------                   

                    //   let name = ["chirag ", "prachi ", "pranjal", ];

                    //   name.push( "yadnesh","manisha" , "manoj" , "sankhe");

                    //   console.log(name);

                    //   name.pop();

                    //   console.log(name);

                    //   console.log(name.toString());

//  -------------- concat(join array) --------- unshit( add to start) --------- shift (delete from start)

                //    let num = [1,2,3,4,5];
                //    let num2 = [11,22,33,44,55];

                   

                //    num.unshift(0);
                //    num.shift();
                //    console.log(num.concat(num2));

// --------------- slice(return a pice of array) ------------- splice(change original array(add,removemreplace)) -------
                


            //    let name = ["chirag ", "prachi ", "pranjal", ];

            // //    console.log(name.slice());

            //    console.log(name.splice(1,1,"sankhe"));

            //    let num = [1,2,3,4,5];

            //   let new_num= num.splice(1,2,22,33);

            //    console.log(num );

            // q1

            // let companys =["bloomberg","microsoft","uber","google","ibm","netflix"];
                
            // companys.shift();

            // companys.splice(1,1,"ola");

            // companys.push("amazon");

            // console.log(companys);
           
            
//  ------------------------------     function ------------------ 
          
//        function multiplay(a,b)
//        {
//          m=a*b;
//          return m;
//        }

//         let a = 10 ;
//         let b = 30 ;

//         let mul = multiplay(a,b);

//         console.log(mul);


//         const sum = (a, b) => {
//             console.log(a + b);
//         }
        
//         sum(5, 6);


//         q1


//         const function_ = (string) =>
//         {
//             let count = 0 ;

//             for(let i = 0 ;i<string.length;i++)
//                 {
//                     if(string[i] == 'a' ||
//                          string[i] =='e' ||  
//                          string[i] =='i' || 
//                          string[i] =='o' || 
//                          string[i] =='u')
//                     {
//                     count++;
//                     }
//                 }
//                 return count;

//         }


//       let result =   function_("chirAg");

//       console.log(result);

// ---------------- ForEach ----------------

//                  let arr = ["chirag", "prachi","pranjal","manisha","manoj"];

//                  arr.forEach((val)=>{

//                     console.log(val);
//                  });


//                 q1

//                 let num = [2,5,8,7,4,1];

//                 num.forEach( (val) => {

//                     console.log(val ,"square is =" ,val*val);
//                 } )


//   ---------------------- filter ----------------

//             let num = [1,2,3,4,5,6,7,8,9];

//             num.filter((num) =>{
//                 console.log(num%2 ==0);
//             })

// --------------------- reduce  ----------------------
//            let num =[1,2,3,4];
           
//           let output =  num.reduce((prev , curr)=>{
//             return prev > curr ? prev:curr;
//            });

//            console.log(output);
         

         
//          q1


//         let marks = [50,45,90,98,75,93,91,50];

//         let output = marks.filter((val)=>
//         {
//             return val>=90;

//         });

//         console.log(output);


//         q2

      



//         let input = prompt("enter a no :");

//         let arr1=[];

//         for(let i =1 ;i<=input;i++)
//             {
//                 arr1.push(i);
//             }

//             let result =  arr1.reduce((res,curr)=>
//                 {
//                     return res+curr;
                   
        
//                 });

//                 console.log(result);

//                 let result2 =  arr1.reduce((res,curr)=>
//                     {
//                         return res*curr;
                       
            
//                     });
    
//                     console.log(result2);


//  --------------------------  D O M  ------------------ 


            //    console.dir(document.body);

// ------------------------   documentbyid ---------  
            // let heading = document.getElementById("heading");
            //  console.dir(heading);


//  ----------------------- document.getElementsByClassName ----------------
           
        //  let classes = document.getElementsByClassName("body");
        //  console.log(classes);
        //  console.dir(classes);

// ----------------------  select with tag __________
              
                //   let h = document.getElementsByTagName("h1");
                //   console.log(h);
                //   console.dir(h);

// --------------------------  D O M     M A N I P L A T I O N    ---------------------
       


            //   SELECT  BY QUERY
            
            // let element = document.querySelector(".div1");
            //  console.dir(element);

            //  let element2 = document.querySelectorAll(".div1");
            //  console.dir(element2);

//   ------------ D O M     M A N I P L A T I O N   property ------------

                //   tagname 

                // let element = document.querySelector(".div2");
                //  console.dir(element.tagName);


                // innertag

                // let hed = document.querySelector("h1");
                // hed.innerText = "new new new ";
                // console.dir(hed);



                // Q1


                // let h1 = document.querySelector("h1");
                // h1.innerText =  h1.innerText +" from apana collage";
                // console.dir(h1);


                //q2


                // let divs = document.querySelectorAll(".box");
                // divs[0].innerText = "first box";
                // divs[1].innerText = "secound box";
                // divs[2].innerText = "third box";


// --------------------------------  attribute ------------------------

//   let div = document.querySelector(".box");
//   console.log(div);



// let heading = document.createElement("h1");

// heading.innerText = "<i> new heading using js </i>" ;

// let h = document.querySelector("body") ;
//  h.prepend(heading) ;


//  let h = document.querySelector("body") ;
//  h.append(heading) ;

//  let h = document.querySelector("body") ;
//  h.before(heading) ;
//  let h = document.querySelector("body") ;
//  h.after(heading) ;


//   let newbtn = document.querySelector("button");

//   newbtn.innerText = " submit" ;

//   newbtn.style.color = "black";
//   newbtn.style.backgroundColor = "pink";

//   document.querySelector("body").prepend(newbtn);

//   let para = document.querySelector(".p_class");
  

//   para.classList.add("newclass");





// ------------------------  event    ----------------------------------


// let btn1 = document.querySelector("#btn1");

// btn1.onclick =()=>{
//     prompt("hello chirag");
// }

// let pera = document.querySelector("#id_p");

// pera.onmouseover = () =>{

//     console.log("u are inside box");

// }

// ---------------- addEventListener ------------------ 

//   let btn1 = document.querySelector("#btn1");
//   btn1.addEventListener("click" ,() => {
//      console.log("data is submited");

//   });

// ---------------------- q1 change mode --------------

 

// let mode = document.querySelector("#modebtn");
// let current_mode = "light";

// modebtn.addEventListener("click" ,()=> {
//     if(current_mode === "light")
//         {
//             current_mode = "dark";
//            let body= document.querySelector("body");
//             body.style.backgroundColor = "black";
//             modebtn.style.color = "white";

//         }else{
//             current_mode = "light";
//             let body= document.querySelector("body");
//             body.style.backgroundColor = "white";
            
//                     mode.style.color = "black";
//         }
// });

// -------------------------------  class and boject  ======================



        //    class parent {
        //       manoj(){
        //         console.log(" i m dad") ;

        //       }

        //       manisha() {
        //         console.log(" i m mom ");
        //       }

        //    }


        //    class chirag extends parent{ 

        //     son() {
        //         console.log("i m son");
        //     }

        //    }



        //  let chiragobj = new chirag();
        //  console.log(chiragobj.manoj());
         
        //  let data = "chirag data";

        // class user {
        //     constructor(name,email)
        //     {
        //         this.name = name;
        //         this.email = email;
        //     }

        //     viewData() {
        //         console.log("data",data );
        //     }
        // }


        // let student1 = new user("prachi " , "prachi@123.com");
        // let student2 = new user("pranjal ", "pranajal@123456.com");

        // console.log(student1.viewData());
        // console.log(student2);


// --------------------------- syncronas ans asyncronas -------------

    //   console.log("hello 1 ");
    //   console.log("hello 2 ");

    //   const func = ((b)=>{

    //     setTimeout(()=>
    //     {
    //         for(let i = 0 ;i<=b;i++)
    //             {
    //                 console.log("chirag hello ", i);
    //             }


    //     },1 * 1000);

    //   });

    //   console.log(func(10));


      
    //   console.log("hello 3 ");
    //   console.log("hello 4 ");
      
    //   console.log("hello 5 ");
    //   console.log("hello 6 ");


    //  ---------------------   callback ------------------

    // let a = parseFloat(prompt("enter a = "));
    // let b = parseFloat(prompt("enter b = "));
    
    // function sum(a, b) {
    //     console.log(a + b);
    // }

    // function mul(a,b)
    // {
    //     console.log(a*b);
    // }

    
    // function calculater(a, b, sum,mul ) {
    //     sum(a, b);
    //     mul(a,b);
    // }
    
    // calculater(a, b,sum,mul);

// ----------------  callback hell -----------------------


// function getdata(dataid, callback) {
//     console.log("dataid", dataid);
//     setTimeout(() => {
//         callback("successfully");
//     }, 4000);
// }

// getdata(1, (result1) => {
//     console.log(result1);
//     console.log("fetching data...2");
//     getdata(2, (result2) => {
//         console.log(result2);
//         console.log("fetching data...3");
//         getdata(3, (result3) => {
//             console.log(result3);
//             console.log("fetching data...4");
//             getdata(4, (result4) => {
//                 console.log(result4);
//                 console.log("fetching data...5");
//                 getdata(5, (result5) => {
//                     console.log(result5);
//                     console.log("All data fetched.");
//                 });
//             });
//         });
//     });
// });


    

// -------------------   promise chaning -----------

// function asyncfun () {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log(" data1");
//             resolve("sucessfuly");
//         } , 4000 );
//     });
// }


// function asyncfun2()
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("sucssefuly");
//         }, 4000);
//     });
// }

// console.log("fetching data 1....");
// let p1 = asyncfun();
// p1.then((res)=>{

//     console.log("fetching data 2....");
//     let p2 = asyncfun2();
//     p2.then((res)=>{});
// });


// ------------------------ Async - await --------------- 




//         function getdata()
// {
//     return new Promise((resolve,reject) =>
//     {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("sucssefuly");
//         }, 4000);
//     });
// }


// async function getAllData() {
//     console.log("getting data1.......");
//     await getdata();
// }

// getdata();
                

                







           



            

            




        








                            


                            

                            

                              






 