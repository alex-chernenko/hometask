
     
// fetch('https://api.myjson.com/bins/152f9j').then(function (response) { 
//     // console.log(response.json());
//     // let posts = response.json();
//     // console.log(posts);
//     // return posts;
//     alert(response.status);
//     console.log(response);
//     return response.json();
// })
window.onload = () => {
 fetch('https://api.myjson.com/bins/152f9j').then(response =>{
response.json().then(data => {
    var posts = data;
    
     
    var date = [];
    for (key in posts.data)

    {  const item = document.createElement('li');
    var list = document.getElementById('list');
    list.appendChild(item);
    
         var l = posts.data[key];
        
       for (key in l)

       {     
        if (key == "image")
            {
                var item2 = document.createElement('img');
                let text = l[key];
                item2.setAttribute("src",text);
                item2.setAttribute("alt","");
                item2.setAttribute("onclick","delete_row(this)");
            }
          else
          {
            var item2 = document.createElement('div');
          }
            if (key == "createdAt")
            {   
                date.push(l[key]);
                date.sort();
                   

               
                
                item2.setAttribute("class","date");
            }
            if (key == "tags")
            {
                item2.setAttribute("class","tags");
            }
            if (key == "title")
            {
                item2.setAttribute("class","title");
            }
            
           let text = l[key];
           
           
           const item3 = document.createTextNode(text);
           item.style.borderRadius = "2px";
           item.style.borderColor = "black";
           item.style.borderStyle = "solid";
            item.appendChild(item2);
            item2.appendChild(item3);
           
        
          
        
       }
       
     
            
    }
    for(var i = 1; i < list.childElementCount; i++){
        
       
        
        for(var j = i+1; j < list.childElementCount+1; j++){
            var l = list.childNodes[i];
            var k = list.childNodes[j];
            
            
            if ((l.childNodes[3]).innerText<(k.childNodes[3]).innerText)
            {   list.insertBefore(k,l);
                
                
                
                
 
            }  
        }
    }
    if (localStorage.getItem("Sort") == "New"){
        
    for(var i = 1; i < list.childElementCount; i++){
        
       
        
        for(var j = i+1; j < list.childElementCount+1; j++){
            var l = list.childNodes[i];
            var k = list.childNodes[j];
            
            
            if ((l.childNodes[3]).innerText<(k.childNodes[3]).innerText)
            {   list.insertBefore(k,l);
                
                
                
                
 
            }  
        }
    }
    }
    console.log(localStorage.getItem("Sort"));
    if (localStorage.getItem("Sort") == "Old"){
        {
        localStorage.setItem('Sort', 'Old');
        for(var i = 1; i < list.childElementCount; i++){
            
           
            
            for(var j = i+1; j < list.childElementCount+1; j++){
                var l = list.childNodes[i];
                var k = list.childNodes[j];
                // console.log(l);
                // console.log(k);
              
                
                if ((l.childNodes[3]).innerText>(k.childNodes[3]).innerText)
                {   list.insertBefore(k,l);
                    
                    
                    
                }  
     
                }  
            }
        }
     }
 
    
    
function hide () {for (let i=11; i<51; i++){
    var loq = document.getElementById('list');
        var height = document.getElementById("list").clientHeight;
    r=loq.childNodes[i];
   r.style.display = "none";

  }
  
}
hide();
    
  
});


    

 })
.catch(err=> {
    console.log(err);
});







};

function Search() {
    var elements = document.getElementsByClassName('title');
    console.log(elements);
    var elem = document.getElementById("search");
    var temp =  elem.value;
   for (let i=0;i<elements.length;i++)
   {
       
       let OneTitle = elements[i];
      
       if ((OneTitle.innerText).indexOf(elem.value) == -1)
       {
        
        OneTitle.parentNode.style.display = "none";
       }
       else
       {
        OneTitle.parentNode.style.display = "block";
       }
   }
    }

document.onscroll=function(){
     
    var loq = document.getElementById('list');
    
    var p = 1;
    if(window.scrollY>loq.clientHeight-((5-p)/5)*loq.clientHeight){
   for (let i=1+p*10; i<11+p*10; i++){
  
  (loq.childNodes[i]).style.display = "block";
  if (i == 1 + 10*p)
  {
      p++;
  }
 }
 

    }
};

    


    
function delete_row(e)
    {
        e.parentNode.parentNode.removeChild(e.parentNode);
 }
 
 
function SortTags(e) {
    
    var elements = document.getElementsByClassName('tags');
    var bus = document.getElementById("Business");
    var show = document.getElementById("Showbiz");
    var sport = document.getElementById("Sport");
    var tech = document.getElementById("Tech");
    var food = document.getElementById("Food");
    var polit = document.getElementById("Politics");
    var cult = document.getElementById("Culture");
         
        
        var t = [bus.name,show.name,sport.name,tech.name,food.name,polit.name,cult.name];
       
     
   for (let i=0;i<elements.length;i++)
   {
    
       let OneTitle = elements[i];
       
       if ((e.checked == true)  && ((OneTitle.innerText).indexOf(e.name) !== -1))
       {
          if ((tech.checked == true) && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(tech.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
          if ((bus.checked == true) && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(bus.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
          if ((show.checked == true)  && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(show.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
          if ((sport.checked == true) && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(sport.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
          if ((food.checked == true)  && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(food.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
          if ((polit.checked == true) && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(polit.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
          if ((cult.checked == true)  && ((OneTitle.innerText).indexOf(e.name) !== -1) && ((OneTitle.innerText).indexOf(cult.name) !== -1))
          {
            list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
          }
       }
        
    //    if ((tech.checked == true) && (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(tech.name) !== -1) && (((OneTitle.innerText).indexOf(e.name)) !==-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    } 
    //    if ((bus.checked == true) && (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(bus.name) != -1) && (((OneTitle.innerText).indexOf(e.name)) !=-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    }
       
    //    if ((show.checked == true) && (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(show.name) != -1) && (((OneTitle.innerText).indexOf(e.name)) !=-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    }
      
    //    if ((sport.checked == true) && (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(sport.name) != -1) && (((OneTitle.innerText).indexOf(e.name)) !=-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    }
    //    if ((food.checked == true)&& (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(food.name) != -1)&& (((OneTitle.innerText).indexOf(e.name)) !=-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    }
    //    if ((polit.checked == true)&& (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(polit.name) != -1)&& (((OneTitle.innerText).indexOf(e.name)) !=-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    }
    //    if ((cult.checked == true)&& (e.checked == true) && (e != tech) && ((OneTitle.innerText).indexOf(cult.name) != -1)&& (((OneTitle.innerText).indexOf(e.name)) !=-1))
    //    {
    //     list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    //    }
       
      
       

     
   } 

    
    
}


     
 

function changeFunc() {
    if (document.getElementById("o").selected) {
        location.reload();
        localStorage.setItem('Sort', 'Old');
    for(var i = 1; i < list.childElementCount; i++){
        
       
        
        for(var j = i+1; j < list.childElementCount+1; j++){
            var l = list.childNodes[i];
            var k = list.childNodes[j];
          
            
            if ((l.childNodes[3]).innerText>(k.childNodes[3]).innerText)
            {   list.insertBefore(k,l);
                
                
                
            }  
 
            }  
        }
    }
 
    if(document.getElementById("n").selected ){
        location.reload();
        localStorage.setItem('Sort', 'New');
    for(var i = 1; i < list.childElementCount; i++){
        
       
        
        for(var j = i+1; j < list.childElementCount+1; j++)
        {
            var l = list.childNodes[i];
            var k = list.childNodes[j];
            // console.log(l);
            // console.log(k);
          
            
            if ((l.childNodes[3]).innerText<(k.childNodes[3]).innerText)
            {   list.insertBefore(k,l);
    
            }  
        }
    }
 }

}
   




  



