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
   <a  onclick="categoryDetail()"  class="nav-link active" href="#">${category.category_name}</a>
   `
   

     navContainer.appendChild(categoryNav);
     
         

})


   };

   loadUsers('categories');
   

  categoryDetail=category_id=>{
    const url =`  https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
   .then(res => res.json())
   .then(data => displayUser(data.data.news_category));

    console.log(url);
  }
  


