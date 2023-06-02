
const male = document.getElementById("male_container");
const women = document.getElementById("women_container");
const div = document.getElementById("div");
const url = `https://fakestoreapi.com/products`;
const womne_filter = document.getElementById("women_filter");
const all = document.getElementById("all");
const ele_filter = document.getElementById("ele_filter");
const mens_filter = document.getElementById("mens_filter");
const jewl_filter = document.getElementById("jewl_filter");
const search = document.getElementById("search");
// display function

async function display(data){
       div.innerHTML='';
   data.forEach((item)=>{
      // creat div class for each card
      const card = document.createElement('div');
      card.className = "cards";
     //  insert image
        const img = document.createElement('img');
        img.setAttribute('src',item.image);
        card.appendChild(img);
        // price and size box
        const specs = document.createElement('div');
        specs.className="specs";
        const price_div = document.createElement('div'); // price 
        price_div.className ="price_div";
        const price = document.createElement('div');
        price.innerHTML = `$ ${item.price}`;
        price_div.appendChild(price);
        const size = document.createElement('div'); // size div
        var obj = ["s","m","l","xl"];
        let arr = [];
        const keys = Object.keys(obj);
            while(arr.length <3){
                
                const ran = random(keys.length-1);
                if(!arr.includes(ran)){
                    arr.push(ran);
                     const key = keys[ran];
                const span = document.createElement('span');
                span.innerHTML =obj[key]+" ";
                size.appendChild(span);
                }
            }
            function random(max){
                return Math.floor(Math.random() * (max + 1));
            }
            price_div.appendChild(size);
            specs.appendChild(price_div);
 // color 
 const colors = document.createElement('div');
 colors.className = "colors";
    const clr_span = document.createElement('span');
    clr_span.innerHTML = `Colors:`
       colors.appendChild(clr_span);
       const black = document.createElement('div');
       const white = document.createElement('div');
       const blue = document.createElement('div');
       white.className="color";
       black.className="color";
       blue.className="color";
       black.style.backgroundColor="black";
       white.style.backgroundColor="red";
       blue.style.backgroundColor="blue";
      colors.appendChild(black);
      colors.appendChild(white);
      colors.appendChild(blue);
      specs.appendChild(colors);
       // rating
       const rating = document.createElement('div');
       rating.className = "rating";
       const rate = document.createElement('span');
       rate.innerHTML=`Rating:`
       rating.appendChild(rate);
       var num = item.rating.rate;
       for(let i = 0;i<=num;i++){
         const star = document.createElement('div');
         star.id = "star";
         star.className="material-icons";
       star.innerText = "star";
       rating.appendChild(star);
       }
       specs.appendChild(rating);
          card.appendChild(specs);
          const btn = document.createElement('button');
          btn.className = "btn";
          btn.id = "cart_btn";
          btn.innerText = "Add Cart";
          card.appendChild(btn);
          div.appendChild(card);
         
   })
}
// display all
async function alwayson(url){
    const link = url; 
 const response = await fetch(link);
 const data = await response.json();
 display(data);
}
alwayson(url);
// display womens 
 womne_filter.addEventListener('click',async()=>{
        const response = await fetch(url);
        const data = await  response.json();
        const women_data = data.filter(Gender => Gender.category === "women's clothing");
        display(women_data); 

 })
 // bubtton clr


 // mens filter
 mens_filter.addEventListener('click',async ()=>{
  const response = await fetch(url);
  const data = await  response.json();
  const mens_data = data.filter(Gender =>Gender.category === "men's clothing");
  display(mens_data);
  filters.style.backgroundColor='red';
 })
 // jewlary filter
 
 jewl_filter.addEventListener('click',async ()=>{
  const response = await fetch(url);
  const data = await  response.json();
  const jewl_data = data.filter(Gender =>Gender.category === "jewelery");
  display(jewl_data);
 
 })
 // electronics filter
 
 ele_filter.addEventListener('click',async ()=>{
  const response = await fetch(url);
  const data = await  response.json();
  const ele_data = data.filter(Gender =>Gender.category === "electronics");
  display(ele_data);
 })

 // display ALl filter
 
 all.addEventListener('click',async ()=>{
  const response = await fetch(url);
  const data = await  response.json();
  display(data);
 })

 // colors
 const filters = document.querySelectorAll('.filter');

// Add click event listener to each filter div
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all filters
    filters.forEach(f => f.classList.remove('active'));

    // Add active class to the clicked filter
    filter.classList.add('active');
  });
});
// search input
search.addEventListener('input',async(e)=>{
  console.log(search.value);
 const searchtxt = search.value.toLowerCase().trim();
 const link = url; 
 const response = await fetch(link);
 const data = await response.json();
 const search_data = data.filter(item =>item.title.toLowerCase().includes(searchtxt));
  if(search_data.length === 0){
    alert('No data');
    e.preventDefault();
    }
 display(search_data);
})
// adding cart

 



