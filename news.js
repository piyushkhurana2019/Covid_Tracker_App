let NewsArena = document.getElementById('NewsArena');

//initializing news API parameters
let  source='in';
let apikey='bd3e1bfd127649869df3fec33a60779b'

//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bd3e1bfd127649869df3fec33a60779b`, true); 
 
//What to do when response is ready
xhr.onload = function () {
    if(this.status===200)
    {
        let json = JSON.parse(this.responseText)
        let articles= json.articles;
        // console.log(articles);

        let newsHTML=""
        articles.forEach(function(element,index){
            
                let news=`<div class="card">
                <div class="Header" onclick="togglehide(${index})">
                <span class="index" id="indexid"> ${index+1}) </span>
              
                    <a data-bs-toggle="collapse" href="#collapseExample${index}" aria-expanded="false" aria-controls="collapseExample">
                        ${element["title"]}
                        <span class="index2" id="indexid${index}"> &#8964; </span>
                    </a>

              

                </div>

                <div class="collapse" id="collapseExample${index}">
                    <div class="card2 card-body">
                        ${element["description"]}. <a href="${element['url']}" target="_blank"> Read More Here 
                    </div>
                    </a>
                </div>

                </div>`
        
                newsHTML+=news;
        });
        NewsArena.innerHTML=newsHTML;

        
    }
    else
    {
        console.log("some error occured");
    }
}

xhr.send();

function togglehide(index){
    let hide = document.getElementById(`indexid${index}`);
    if(hide.style.display != 'none')
    hide.style.display = 'none';
    else
    hide.style.display = 'block'
}
