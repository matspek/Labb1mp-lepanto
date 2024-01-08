function pizzalista(){
        
    let pizza= localStorage.getItem('myArrayKey');
    let table = document.getElementById("cart");
    let pizzaJson=JSON.parse(pizza);
    let antal = 1;
    console.log(pizzaJson.length);
    for(let i=0; i< pizzaJson.length; i++){


        let row = document.createElement('tr');
        let coloun= document.createElement('td');
        let pizzadata = document.createElement('p');
        coloun.appendChild(pizzadata);
        pizzadata.innerText=pizzaJson[i].name;
        row.appendChild(coloun);

        let antalcolum = document.createElement('td');
        row.appendChild(antalcolum);
        let antaldata= document.createElement('p');
        antalcolum.appendChild(antaldata);
        antaldata.innerText = pizzaJson[i].antal;

        let priscolum = document.createElement('td');
        let prisdata= document.createElement('p');
        prisdata.innerText = pizzaJson[i].pris +" kr";
        console.log(pizzaJson[i].pris);
        priscolum.appendChild(prisdata);
        row.appendChild(priscolum);
      
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        btn1.innerHTML="+";
        btn2.innerHTML="-";
        btn1.onclick=function(){addPizza(i)};
        btn2.onclick=function(){removePizza(i)};
        row.appendChild(btn1);
        row.appendChild(btn2);

        table.appendChild(row);
    
    }
    let totalsummarad = document.createElement('tr');
    let totalsummacloum= document.createElement('td');
    let totalsummadata = document.createElement('p');
    totalsummarad.appendChild(totalsummacloum);
    totalsummadata.innerText =  "Total pris "+ addTotalPrice() + " kr";
    totalsummacloum.appendChild(totalsummadata);
    table.appendChild(totalsummarad);


}
function addPizza(index){
    console.log('add'+index);
    let pizza= localStorage.getItem('myArrayKey');
    let pizzaJson=JSON.parse(pizza);
    pizzaJson[index].antal=pizzaJson[index].antal+1;
    
    const string1= JSON.stringify(pizzaJson);
    localStorage.setItem('myArrayKey',string1);
    location.reload();
  }
function removePizza(index){
    console.log('remove'+index);
    let pizza= localStorage.getItem('myArrayKey');
    let pizzaJson=JSON.parse(pizza);
    if(pizzaJson[index].antal=1){
      pizzaJson.splice(index,1);          
    }else{
      pizzaJson[index].antal=pizzaJson[index].antal-1;
    }
    const string1= JSON.stringify(pizzaJson);
    localStorage.setItem('myArrayKey',string1);
    location.reload();
}
function addTotalPrice(){
  let pizza= localStorage.getItem('myArrayKey');
  let pizzaJson=JSON.parse(pizza);
  let sum=0;
  for(let i=0;i<pizzaJson.length;i++){
    sum += pizzaJson[i].pris*pizzaJson[i].antal;
   
  }
  return sum;
}