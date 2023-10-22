var btc = document.querySelector("#bitcoin");
var eth = document.querySelector("#ethereum");
var doge = document.querySelector("#dogecoin");

var settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=pkr",
    "methods":"GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    // console.log(response);

    btc.innerHTML = response.bitcoin.pkr;
    eth.innerHTML = response.ethereum.pkr;
    doge.innerHTML = response.dogecoin.pkr;
})


