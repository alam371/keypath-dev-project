//Chart.js
const ctx = document.getElementById('chart1').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['$1', '$2', '$3', '$4', '$5', '$6', '$7', '$8', '$9', '$10'],
        datasets: [{
            label: 'The number of knitted hat sold',
            backgroundColor: 'rgb(251, 159, 164)',
            borderColor: 'rgb(40,48,65)',
            data: [0, 800, 700, 6000, 5000, 4000, 3000, 2000, 1000, 0]
        }]
    },
    options: {
    }
});



//Exercise Section:
// Equilibrium Price Equations:
//  Qsupply = Msupply * price + Bsupply
//  Qdemand = Mdemand * price + Bdemand

const Mdemand = -1000;
const Bdemand = 10000;
const Msupply = 0; // what if ABC can hire more people when price goes up?
const Bsupply = 8000;
let consumption;
let supply;
let message;

document.getElementById("calculate").addEventListener("click", calculateOutput);

function calculateOutput() {
    let price;
    let priceOptions = document.getElementsByName("price");

    message = "";

    for (let i = 1; i < priceOptions.length; i++) {
        if (priceOptions[i].checked) {
            price = priceOptions[i].value;
            break;
        }
    }

    consumption = price * Mdemand + Bdemand;
    supply = price * Msupply + Bsupply;

    if (consumption > supply) {
        consumption = supply;
        message = "ABC Company canot make enough XYZ Widgets";
    }

    if (consumption <= 0) {
        consumption = 0;
        message = "No one will buy XYZ Widgets at this price";
    }

    /*
    if (maxRevenue) {
        message = "This is the equilibrium price"
    }
    */

    revenue = consumption * price;

    document.getElementById("result").innerHTML = "XYZ Widgets sold:"+consumption+"/month<br>Revenue:"+revenue+"/month<br><br>"+message;
}

//giphy-API
let apiKey = 'Yk9AWq3iW0442FfQxysOai4O7mMbB5QZ'
let keyword = 'good+job'
document.addEventListener('DOMContentLoaded', init);
function init(){
    document.getElementById('calculate').addEventListener('click', evt => {
        evt.preventDefault();
        let url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=3`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then( content => {
                console.log(content)
                console.log('META', content.meta)
                let img = document.createElement('img');
                img.src = content.data[0].images.downsized.url;
                img.alt = content.data[0].title;
                $('#result').append(img);
                let oneGiphy = document.querySelector('.giphy-container');
                //oneGiphy.insertAdjacentElement('afterbegin', fig);
            })
            .catch(err => {
                console.error(err);
            })
    })
}