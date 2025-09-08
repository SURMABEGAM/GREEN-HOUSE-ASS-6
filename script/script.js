 const loadCategories=()=> {
  fetch("https://openapi.programming-hero.com/api/categories") // সার্ভার থেকে ডাটা আনবে
    .then(res => res.json())      // ডাটাকে JSON বানাবে
    .then(data =>showCategories(data.categories)) // ডাটা দেখাবে
    //.catch(err => console.log("Error:", err));
}

const showCategories=(titles)=> {
    const levelConteiner =document.getElementById("categories")              
            levelConteiner.innerHTML = "";

            for (let title of titles){              
  const btndiv = document.createElement("div");
    btndiv.innerHTML=`
                           <button onclick="cardConteiner('${title.category_name}')"
                            class="w-full rounded-2xl bg-yellow-300 py-2 px-12 font-semibold hover:bg-yellow-500 ">
                              ${title.category_name}
                               </button> `;      
          
    levelConteiner.append(btndiv);
 }       
 };

 const loadDefaultPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
      // প্রথম ৬টা নাও
      const firstSix = data.plants.slice(0, 6);
      dispalay(firstSix);
    });
};

  const cardConteiner = (categoryName) => {
      fetch(`https://openapi.programming-hero.com/api/plants`) // সার্ভার থেকে ডাটা আনবে
    .then(res => res.json())      // ডাটাকে JSON বানাবে
    .then((data) => {
                  const filtered = data.plants.filter(plant => plant.category === categoryName);
      dispalay(filtered);
 }) 
  };
 
 const dispalay = (crads) => {
    const  cardConteiner =document.getElementById("card-conteiner")              
            cardConteiner.innerHTML = "";

            cardConteiner.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
                  

     crads .forEach((card) =>   {               
  const carddiv = document.createElement("div");
   carddiv.innerHTML=`
      <div class="card bg-base-100 shadow-md rounded-2xl  border mx-auto">
       <figure>
          <img src="${card.image}" alt="${card.name}" class="h-36 w-full object-cover"/>
         </figure>
        <div class="card-body">
          <h2 class="card-title text-lg">${card.name}</h2>
          <p class="h-16 overflow-hidden text-sm">${card.description}</p>
          <div class="card-actions justify-between  items-center mt-2">
            <div class="badge badge-outline text-xs">${card.category}</div>
            <div class="badge badge-outline text-xs">৳${card.price}</div>
            <button 
                   class="w-full rounded-xl bg-yellow-300 py-2 px-12 font-semibold hover:bg-yellow-500">
                       Add to Cart      
                               </button>
          </div>
        </div>
      </div> 
    `;
          
    cardConteiner.append(carddiv);
 })       
 };
loadDefaultPlants();
loadCategories();

