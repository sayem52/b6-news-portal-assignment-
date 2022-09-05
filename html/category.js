const loadUsers = (search) =>{
    const url= `https://openapi.programming-hero.com/api/news/${search}` ;
    fetch(url)
   .then(res => res.json())
   .then(data => displayUser(data.data.news_category));
}


const displayUser = data =>{

data.forEach( category => {

   const navContainer=document.getElementById('nav-list');
   const categoryNav = document.createElement('div');
   categoryNav.classList.add('navbar-nav');
   categoryNav.innerHTML=
   `
   <a onclick="apiDetail('${category.category_id}')"  class="nav-link active" href="#">${category.category_name}</a>
   `
     navContainer.appendChild(categoryNav);

})

   };

   loadUsers('categories');
   

const apiDetail = id =>{
   const url= `https://openapi.programming-hero.com/api/news/category/${id}`;
   console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(data => displayDetail(data.data))
   
   };

const displayDetail = data =>{
   
       const detailContainer=document.getElementById('detail-container');
       detailContainer.innerHTML=``;
       data.forEach( item =>{
         console.log(item);
       const categoryDetail= document.createElement('div');
       categoryDetail.classList.add('card');
       categoryDetail.classList.add('card-m');

       categoryDetail.innerHTML=
       
       `
       <div class="row g-0">
            <div class="col-md-4">
              <img src=${item.image_url} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.details.slice(0,200)}</p>
                
              </div>
            </div>
        </div>
       `
       
    
       detailContainer.appendChild(categoryDetail);
         
      })
 
       };

  

