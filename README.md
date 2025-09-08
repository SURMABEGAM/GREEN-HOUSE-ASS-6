## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-006
// 1. নির্দিষ্ট ক্যাটেগরির গাছ লোড করা
function loadPlantsByCategory(categoryId) {
  document.getElementById("spinner").classList.remove("hidden"); // লোডিং দেখাও

  fetch(`${API_BASE}/category/${categoryId}`)
    .then(res => res.json())
    .then(data => showPlants(data.data || data)) // API response
    .catch(err => console.log("Error:", err))
    .finally(() => {
      document.getElementById("spinner").classList.add("hidden"); // লোডিং বন্ধ করো
    });
}

// 2. গাছ দেখানো (কার্ড আকারে)
function showPlants(plants) {
  const container = document.getElementById("plants");
  container.innerHTML = ""; // আগের ডাটা মুছে ফেলো

  if (!plants || plants.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500">No plants found</p>`;
    return;
  }

  plants.forEach(p => {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded-lg p-4 flex flex-col";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="h-40 w-full object-cover rounded">
      <h3 onclick="loadPlantDetail(${p.id})" 
          class="mt-2 text-lg font-bold text-green-700 cursor-pointer hover:underline">
          ${p.name}
      </h3>
      <p class="text-sm text-gray-600">${p.description?.slice(0, 60) || "No description"}...</p>
      <p class="text-sm text-gray-500">Category: ${p.category || "N/A"}</p>
      <p class="font-semibold text-green-700">Price: $${p.price || 0}</p>
      <button onclick="addToCart('${p.id}', '${p.name}', ${p.price || 0})" 
        class="mt-auto bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
        Add to Cart
      </button>
    `;

    container.appendChild(card);
  });
}
let cart = []; // সব cart item এখানে থাকবে

// 1. Add to Cart
function addToCart(id, name, price) {
  // cart এ নতুন item যোগ করা
  cart.push({ id, name, price });
  showCart(); // cart আপডেট দেখাও
}

// 2. Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1); // index দিয়ে ১টা item মুছে ফেলো
  showCart();
}

// 3. Cart দেখানো
function showCart() {
  const cartList = document.getElementById("cart");
  const totalEl = document.getElementById("total");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${i})" class="text-red-500 ml-2">❌</button>
    `;
    cartList.appendChild(li);
  });

  totalEl.innerText = total; // মোট দাম দেখাও
}
// 1. গাছের বিস্তারিত লোড করা
function loadPlantDetail(id) {
  fetch(`${API_BASE}/plant/${id}`)
    .then(res => res.json())
    .then(data => showModal(data.data || data));
}


### 📅 Deadline For 60 marks: 9th September, 2025 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks : 13th September , 2025 (6:00 pm⏱️)

### 📅 Deadline For 30 marks: Any time after 13the September , 2025 (6:01 pm⏱️).

---
# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---




## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.



🧰 Technology Stack:
        
        HTML

        CSS (Vanilla / Tailwind / DaisyUI)

        JavaScript (Vanilla only, no frameworks)

📌 Rules
✅ At least 5 meaningful commits

❌ No dummy text or Lorem Ipsum — must use relevant content





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---