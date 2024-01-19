// final Data has to be displayed in the Bootstrap Cards
var container = document.createElement("div");
container.className="container";
var row1 =document.createElement("div");
row1.className="main";
row1.innerHTML="INTERESTING CAT FACTS";
var row2 =document.createElement("div");
row2.className="row"

async function get_data() {
    try {
        var res = await fetch("https://cat-fact.herokuapp.com/facts");
        var result = await res.json(); 
        console.log(result)     
        for(var i =0;i<result.length;i++){
            var col=document.createElement("div");
            col.className="col-md-4";
            col.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Fact No: ${i+1}</div>
            <div class="card-body text-primary">
            <h5 class="card-title">${result[i].text}</h5>
            </div>
            </div>`
            row2.append(col);
        }
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
get_data();
container.append(row1);
container.append(row2);
document.body.append(container);