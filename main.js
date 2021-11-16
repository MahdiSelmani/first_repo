var plus = document.querySelectorAll('.plusbtn')
var itemquantity = document.querySelectorAll('.qt')
var minus = document.querySelectorAll('.minus')
var item = document.querySelectorAll('.item')
var Total = document.querySelector('#Total')
var price = document.querySelectorAll('.price')
var quantity = document.querySelector('#quantity')



//***********************PLUS BUTTON******************** *//
for(let i=0; i<plus.length; i++) {
  plus[i].addEventListener('click', function(){
    if(itemquantity[i].innerText<9)
    {itemquantity[i].innerText ++ ;
      quantity.innerText++ ;
      Result()}
  })
}
//************************MINUS BUTTO******************** *//

for(let i=0; i<minus.length; i++) {
  minus[i].addEventListener('click', function(){
    if(itemquantity[i].innerText>0)
    {itemquantity[i].innerText -- ;
      quantity.innerText-- ;
      Result()}
      
  })
}


//***********CALCUL TOTAL************************* *//
function Result(){
  var prix = []
for (var m=0 ; m<price.length;m++) {
  prix.push(price[m].innerText)
}
var kim = []
for (var m=0; m<itemquantity.length; m++) {
  kim.push(itemquantity[m].innerText)
}
var result=0
for (var i=0; i < prix.length; i++) { 
    result += (prix[i] * kim[i]); }

 Total.innerHTML = result
}



//***************************REMOVE ITEM**************************** *//
var item = document.querySelectorAll('.item')
var parent = document.querySelector('body');
var del = document.querySelectorAll('.del')

for ( let i = 0 ; i <item.length ; i++) {
       del[i].addEventListener('click',function(){
    item[i].remove();
    Total.innerHTML = 0 ;
    quantity.innerHTML = 0 ;
    itemquantity.innerText = 0 ;
    if (i=0) { itemquantity[1].innerText = 0 ;itemquantity[2].innerText = 0 ;}
    if (i=1) { itemquantity[0].innerText = 0 ; itemquantity[2].innerText = 0 }
    if (i=2) {itemquantity[0].innerText = 0 ; itemquantity[1].innerText = 0}
    
    
    
     
})
} 

  //**************************LIKE BUTTON********************** *//
  var like=document.querySelectorAll('.like')
  like[0].style.color='black'
  like[1].style.color='black'
  like[2].style.color='black'
  for (let i=0 ; i<like.length ; i++) {
    like[i].addEventListener('click',function(){
        if (like[i].style.color=='black') {
        like[i].style.color = 'red' ;
        like[i].style.fontSize="xx-large"; }
       else 
       {like[i].style.color = 'black' ;
       like[i].style.fontSize="small" }
    })
  }




  





  

