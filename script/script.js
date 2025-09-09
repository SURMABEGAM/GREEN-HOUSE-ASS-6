    let  cartItems = [];
     let total = 0; 

const loadCategories=()=> {
  fetch("https://openapi.programming-hero.com/api/categories") 
    .then(res => res.json())    
    .then(data =>showCategories(data.categories)) 
    //.catch(err => console.log("Error:", err));
}

const showCategories=(titles)=> {
    const levelConteiner =document.getElementById("categories")              
            levelConteiner.innerHTML = "";

            for (let title of titles){              
             const btndiv = document.createElement("div");
               btndiv.innerHTML=`
                           <button onclick="cardConteiner('${title.category_name}')"
                            class=" w-full rounded-2xl bg-yellow-300 py-2 px-4 gap-2  hover:bg-yellow-500 ">
                              ${title.category_name}
                               </button> `;      
          
    levelConteiner.append(btndiv);
 }       
 };

 const loadDefaultPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
      const firstSix = data.plants.slice(0, 6);
      dispalay(firstSix);
    });
};

  const cardConteiner = (categoryName) => {
      fetch(`https://openapi.programming-hero.com/api/plants`) 
    .then(res => res.json())    
    .then((data) => {
                  const filtered = data.plants.filter(plant => plant.category === categoryName);
      dispalay(filtered);
 }); 
  };

  const loadCardDetails = async(id) => {
        const url =`https://openapi.programming-hero.com/api/plant/${id}`; 
         const res =  await fetch(url);
         const details = await res.json();
         console.log(details);
         dispalayCartDetails(details.plants);

  }

const dispalayCartDetails = (cart) =>
                   {  console.log(cart);
        const modal =document.getElementById("my_modal");
        modal.showModal();
          const modalid =document.getElementById("modal-container");        
      modalid.innerHTML=`
            <figure>
      <img src="${cart.image}" alt="${cart.name}" class="h-36 w-full object-cover"/>
    </figure>             
    <h3 class="text-lg font-bold">${cart.name}</h3>
    <p class="py-4">${cart.description}</p>
     <button 
                            class=" w-full rounded-2xl bg-yellow-300 py-2 px-4 gap-2  hover:bg-yellow-500 ">
                              ${card.price}
                               </button> `; 
  
        
        
};


 const dispalay = (crads) => {
    const  cardConteiner =document.getElementById("card-conteiner")              
            cardConteiner.innerHTML = "";

     crads .forEach((card) =>   {               
  const carddiv = document.createElement("div");
   carddiv.innerHTML=`
      <div class="card bg-base-100 shadow-md rounded-2xl  border mx-auto">
      <figure>
          <img src="${card.image}" alt="${card.name}" class="h-36 w-full object-cover"/>
        </figure>
        <div class="card-body">
          <h2 onclick="loadCardDetails(${card.id})" class="card-title text-lg">${card.name}</h2>
          <p class="h-16 overflow-hidden text-sm">${card.description}</p>
          <div class="card-actions justify-between  items-center mt-2">
            <div class="badge badge-outline text-xs bg-green-100">${card.category}</div>
            <div class="badge badge-outline text-xs  bg-green-100">৳${card.price}</div>
            <button 
                   class="add-to-cart w-full rounded-xl bg-yellow-300 py-2 px-12 font-semibold hover:bg-yellow-500">
                       Add to Cart      
                               </button>
          </div>
        </div>
      </div> 
    `;

      const btn = carddiv.querySelector(".add-to-cart");
    btn.addEventListener("click", () => addToCart(card));

       cardConteiner.append(carddiv);
 })       
 };
    
     const addToCart = (plant) => {
          cartItems.push(plant);
          total +=plant.price;
          updateCartUI();        
     };
     const updateCartUI = () => {
  const cartList = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  cartList.innerHTML = "";
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ৳${item.price} 
      <button onclick="removeFromCart(${index})"
       class="text-red-500 ml-5">  <i class="fa-solid fa-xmark"></i>
       </button>
    `;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
};

const removeFromCart = (index) => {
  total -= cartItems[index].price;
  cartItems.splice(index, 1);
  updateCartUI();
};

loadDefaultPlants();
loadCategories();

