document.getElementById("current-cookies").innerHTML = localStorage.getItem('cookies');

if(localStorage.getItem('cookies') == null){
    localStorage.setItem('cookies', 0);
    localStorage.setItem('cpc', 1);
    document.getElementById("current-cookies").innerHTML = localStorage.getItem('cookies')
}

document.getElementById("btn").addEventListener('click', function () {
    let current = parseInt(localStorage.getItem('cookies'));
    current += parseInt(localStorage.getItem('cpc'));
    localStorage.setItem('cookies', current)
    document.getElementById("current-cookies").innerHTML = current.toString();
});

document.getElementById("buy-cpc").addEventListener('click', function () {
   if(parseInt(localStorage.getItem('cookies')) >= 200 ){

       let current = parseInt(localStorage.getItem('cpc'));
       current += 1;

       localStorage.setItem('cookies', parseInt(localStorage.getItem('cookies'))- 200)

       localStorage.setItem('cpc', current)

       document.getElementById("current-cookies").innerHTML = localStorage.getItem('cookies');
   }
});
