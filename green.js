let allPants = ()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(allplants =>displayAllPlants(allplants.plants));
}
allPants();
let displayAllPlants=(alls)=>{
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML=" ";
    for (const all of alls) {
        let card = document.createElement("div");
     card .innerHTML=`
     <div class="bg-white rounded-2xl p-4">
        <img src=${all.image} alt="" class="rounded-2xl h-[300px] w-full">
        <h2 class="font-semibold text-sm text-[#18181B] my-2">${all.name}</h2>
        <p class="text-[0.75rem] text-[#1F2937]">${all.description}</p>
        <div class=" flex justify-between my-3">
        <button class="btn rounded-4xl bg-[#DCFCE7] text-[#15803D]">${all.category}</button>
        <p class="font-semibold text-sm">৳<span>${all.price}</span></p>
        </div>
        <button class="btn bg-[#15803D] text-white rounded-4xl w-full font-medium">Add to Cart</button>
      </div>
     `
     cardContainer.append(card);
     
    };
    
}
let allCategories = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(categories =>displayCategories(categories.categories
));
}
allCategories();

let displayCategories=(id)=>{
    id.forEach(el => {
        let categoriesContainer = document.getElementById("categories-container");
    let categoriesDiv= document.createElement("div");
    categoriesDiv.innerHTML=`
    <button onclick="categoryPlant(${el.id})" class=" btn btn-soft w-full hover:bg-[#15803D] hover:text-white bg-[#F0FDF4] border-none ">${el.category_name}</button>
    `
    categoriesContainer.append(categoriesDiv);
    });
    
}

let categoryPlant=(id)=>{
    let url=`https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(plants =>displayAllPlants(plants.plants));

}
