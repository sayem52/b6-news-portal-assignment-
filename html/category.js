const loadUsers = (search) =>{
    const url= `https://openapi.programming-hero.com/api/news/${search}` ;
    try{
      fetch(url)
      .then(res => res.json())
      .then(data => displayUser(data.data.news_category));
    }
    catch (error){
         console.log(error);
    }
}


const displayUser = data =>{

data.forEach( category => {

   const navContainer=document.getElementById('nav-list');
   const categoryNav = document.createElement('div');
   categoryNav.classList.add('navbar-nav');
   categoryNav.innerHTML=
   `
   <a onclick="apiDetail('${category.category_id}')"  class="nav-link active" id="hover-add" href="#">${category.category_name}</a>

   `
   
     navContainer.appendChild(categoryNav);

})

   };

   loadUsers('categories');
   

const apiDetail = id =>{
   const url= `https://openapi.programming-hero.com/api/news/category/${id}`;
  try{
     
   fetch(url)
   .then(res => res.json())
   .then(data => displayDetail(data.data))
  }
  catch (error){
   console.log(error);
  }
   
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
              <img src=${item.image_url} class="img-fluid rounded-start img-fit" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.details.slice(0,200)}</p>
                <img src="${item.author.img}" class="img-thumbnail img-size" alt="...">
                      <div class="row align-items-end">
                        <div class="col">
                           
                           <small >${item.author.name}</small> <br>
                           <small>${item.author.published_date}</small>
                        </div>
                        <div class="col">
                        <small> <i class="fa-regular fa-eye"></i> ${item.total_view} </small>
                        </div>
                        <div class="col">
                           <a><i class="fa-solid fa-arrow-right no-border"></i></a>
                        </div>
                     </div>
                
                
              </div>
            
              <div class="mar-v"> 
                 
              </div>
              
            </div>
        </div>
       `
       
    
       detailContainer.appendChild(categoryDetail);
         
      })
 
       };

  

