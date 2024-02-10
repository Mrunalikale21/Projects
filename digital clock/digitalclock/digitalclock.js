const click = document.getElementById('clock')
//const click = querySelector('clock')


setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();  //cozz we want to change in document

},1000)                            //time in milisecode 
