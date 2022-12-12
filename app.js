const menu = [
  {
    id: 1,
    title: "plate of amala",
    category: "lunch",
    price: 500,
    img: "./images/Amala.jpg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores inventore ea enim expedita nobis est, tenetur sed eligendi, nostrum illum rerum eaque. `,
  },
  {
    id: 2,
    title: "boli and groundnut",
    category: "dinner",
    price: 1399,
    img: "./images/boli.webp",
    desc: `Ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores inventore ea enim expedita nobis est, tenetur sed eligendi, nostrum illum rerum eaque. `,
  },
  {
    id: 3,
    title: "burns",
    category: "lunch",
    price: 699,
    img: "./images/burns.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "semo egusi soup",
    category: "breakfast",
    price: 2099,
    img: "./images/eba-egusi.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "semo vegetable stew",
    category: "lunch",
    price: 2299,
    img: "./images/eba-stew.webp",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "egusi soup",
    category: "breakfast",
    price: 1899,
    img: "./images/egusisoup.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "fufu egusi",
    category: "breakfast",
    price: 899,
    img: "./images/fufu-egusi.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "rice salad",
    category: "lunch",
    price: 1299,
    img: "./images/rice salad.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "pounded yam egusi",
    category: "dinner",
    price: 1867,
    img: "./images/fufu-veg.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "moimoi",
    category: "lunch",
    price: 1634,
    img: "./images/moimoi.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "jollof rice",
    category: "dinner",
    price: 1599,
    img: "./images/Nigeria-Jollof-rice.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "jollof plantain",
    category: "breakfast",
    price: 1545,
    img: "./images/Nigerian-Jollof-rice-plantain.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "ofada rice",
    category: "lunch",
    price: 1439,
    img: "./images/ofada-rice.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "okro soup",
    category: "dinner",
    price: 1655,
    img: "./images/okro.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "fried plantain",
    category: "lunch",
    price: 6599,
    img: "./images/plantain.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 16,
    title: "edikang ikon soup",
    category: "breakfast",
    price: 5499,
    img: "./images/Plate-of-edikang-ikon.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "fried rice",
    category: "dinner",
    price: 1699,
    img: "./images/coconut-rice.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "rice salad",
    category: "lunch",
    price: 1599,
    img: "./images/rice-salad.webp",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 19,
    title: "semo ogbono",
    category: "lunch",
    price: 599,
    img: "./images/semo-ogbono.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 20,
    title: "soup",
    category: "dinner",
    price: 1689,
    img: "./images/soup.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center"); 

const btnContainer = document.querySelector(".btn-container");


// load items
window.addEventListener("DOMContentLoaded", function(){
 displayMenuItems(menu);
displayMenuButtons()
});


//  display menu buttons

function displayMenuButtons(){
  
 const categories = menu.reduce(function(values, item){
  if(!values.includes(item.category)){
    values.push(item.category);
  }
  return values;
 }, ["all"]);
 
 const categoryBtns = categories.map(function(category){
  return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
 }).join("");
 btnContainer.innerHTML = categoryBtns;
 const filterBtns = document.querySelectorAll(".filter-btn");
 // filter items
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        
        return menuItem;
      }
    });
    if(category === "all"){
      displayMenuItems(menu);
    } else{
      displayMenuItems(menuCategory);
    }
  });
});

}







// display menu items

function displayMenuItems(menuItems){
 let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">₦‎ ${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
// footer copyright

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();