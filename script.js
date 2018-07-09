
     
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


function SortTags() {

}

function showResult(str) {
    if (str.length==0) { 
      document.getElementById("livesearch").innerHTML="";
      document.getElementById("livesearch").style.border="0px";
      return;
    }
    if (window.XMLHttpRequest) {
      
      xmlhttp=new XMLHttpRequest();
    } 
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("livesearch").innerHTML=this.responseText;
        document.getElementById("livesearch").style.border="1px solid #A5ACB2";
      }
    }
    xmlhttp.open("GET","livesearch.php?q="+str,true);
    xmlhttp.send();
  }
     
 

function changeFunc() {
    if (document.getElementById("o").selected) {
        location.reload();
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
   



array = ["Business", 'Showbiz', 'Tech', 'Sport', 'Food', 'Politics', 'Culture'];

  



