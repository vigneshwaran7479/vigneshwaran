let arr=["./HTML/image/scard1.jpg","./HTML/image/scard5.jpg",
"./HTML/image/scard3.jpg","./HTML/image/scard4.jpg","./HTML/image/v1.jpg",
"./HTML/image/v2.jpg","./HTML/image/v3.jpg","./HTML/image/v4.jpg"]

let x=document.getElementsByClassName("a11")

let count=0;




function fun(){
    let y=document.getElementsByClassName("fa-sharp")
   // console.log( "y", y[count].classList)
    count++
    count=count%arr.length
    for(let i=0;i<x.length;i++){
        if(i==count){
            y[i].classList.remove('fa-regular')
            y[i].classList.add('fa-solid')

        }
        else{
            y[i].classList.add('fa-regular')
            y[i].classList.remove('fa-solid')

        }

        let cc=(count+i)%arr.length
        x[i].src=arr[cc]

       
    }};
setInterval(fun,2000)


