function pizzas(selectedpizza,price,antal) {
    pizza.push({name: selectedpizza,pris: price, antal: 1});
    const string1= JSON.stringify(pizza);
     document.getElementById("result").innerText = string1; 
     console.log(string1);
     // Convert the array to a string using JSON.stringify
      var arrayString = JSON.stringify(pizza);

      // Store the string in localStorage with a specific key
      localStorage.setItem('myArrayKey', arrayString);
  } 
  