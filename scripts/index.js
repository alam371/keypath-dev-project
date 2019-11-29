//Chart.js
const ctx = document.getElementById('chart1').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['$0', '$10', '$20', '$30', '$40', '$50', '$60', '$70', '$80', '$90'],
        datasets: [{
            label: 'The number of knitted hat sold',
            backgroundColor: 'rgb(251, 159, 164)',
            borderColor: 'rgb(40,48,65)',
            data: [0, 118, 135, 167, 180, 160, 140, 117, 98, 0]
        }]
    },
    options: {
    }
});

//giphy-API
let apiKey = 'Yk9AWq3iW0442FfQxysOai4O7mMbB5QZ'
let keyword = 'good+job'
document.addEventListener('DOMContentLoaded', init);
function init(){
    document.getElementById('calculate').addEventListener('click', evt => {
        evt.preventDefault();
        // let url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=3`
        // console.log(url);
        // fetch(url)
        //     .then(res => res.json())
        //     .then( content => {
        //         console.log(content)
        //         console.log('META', content.meta)
        //         let img = document.createElement('img');
        //         img.src = content.data[0].images.downsized.url;
        //         img.alt = content.data[0].title;
        //         $('#result').append(img);
        //         let oneGiphy = document.querySelector('.giphy-container');
        //         //oneGiphy.insertAdjacentElement('afterbegin', fig);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });

            let radioOne = document.getElementById('value-one').checked;
            let radioTwo = document.getElementById('value-two').checked;
            let radioThree = document.getElementById('value-three').checked;
            let question = document.forms['exercise']['price'].value;
            let ans = '2';
            if (radioOne === false && radioTwo === false && radioThree === false) {
                $('.form-submit-btn').append(`<p class="alert-submit">Please choose an option before submit.</p>`);
                $('.alert-submit').fadeOut(3000);
                return false
            } else {
                if (question !== ans ){
                    $('.form-submit-btn').append(`<p class="try-again-msg">Wrong answer. Please try again</p>`);
                    $('.try-again-msg').fadeOut(3000);
                    return false
                } else {
                    $('.giphy-container').append(`<p class="correct-msg">Correct, you got it!</p>`)
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
                        });
                }
                return true
            }
    })
}
