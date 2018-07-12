
     
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
     else {
        console.log(localStorage.getItem("Sort"));
      
        var arr = localStorage.getItem("Sort").split(',');
        for (i in arr)
        {   console.log(document.getElementById(arr[i]).checked);
            document.getElementById(arr[i]).checked = "true";
            
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
 
    
    
    SortTags();
hide();


  
});


    

 })
.catch(err=> {
    console.log(err);
});







};
function hide () {for (let i=11; i<51; i++){
    var loq = document.getElementById('list');
        var height = document.getElementById("list").clientHeight;
    r=loq.childNodes[i];
   r.style.display = "none";

  }
  
}
function unhide () {for (let i=11; i<51; i++){
    var loq = document.getElementById('list');
        var height = document.getElementById("list").clientHeight;
    r=loq.childNodes[i];
   r.style.display = "block";


  }
  
}
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
    unhide();
    var elements = document.getElementsByClassName('tags');
    var bus = document.getElementById("Business");
    var show = document.getElementById("Showbiz");
    var sport = document.getElementById("Sport");
    var tech = document.getElementById("Tech");
    var food = document.getElementById("Food");
    var polit = document.getElementById("Politics");
    var cult = document.getElementById("Culture");
    var p = [bus,show,sport,tech,food,polit,cult];   
    var t = [bus.name,show.name,sport.name,tech.name,food.name,polit.name,cult.name];
    var countTags= 0;
    var checkedTags = [];
   for (let i=0;i<p.length;i++){
    if (p[i].checked == true)
    {
        checkedTags.push(p[i].name);
        countTags= countTags+1;
       
    }

   }
   localStorage.setItem('Sort', checkedTags);
   
   var m = 0;
   var n = 0;
     
   for (let i=0;i<elements.length;i++)
   {
     
       let OneTitle = elements[i];
       function TagsInPost(p) {
        let CheckedTagsInPost = 0;
        for (key in checkedTags){
        if ((p.innerText).indexOf(checkedTags[key]) !== -1)
        {
            CheckedTagsInPost++;
            
        }
        }
        return CheckedTagsInPost;
    }

    
    
    if  (TagsInPost(OneTitle) == 3)
  {
    list.insertBefore(OneTitle.parentNode, elements[0].parentNode);
    m++;
    console.log(m);
  }
  if (TagsInPost(OneTitle) == 2)
  {
    list.insertBefore(OneTitle.parentNode, elements[m].parentNode);
    n++

  }
  if (TagsInPost(OneTitle) == 1)
  {
    list.insertBefore(OneTitle.parentNode, elements[m+n+1].parentNode);
    n++

  }
       
      
           
   } 

    hide();
    
    
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
   




  



