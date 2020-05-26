let i = 0;

let start = Date.now();

function count() {

  if (i == 1000000000) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count, 0);
  }

  // a piece of heavy job
  for(let j = 0; j < 1000000; j++) {
    i++;
  }

}

//count();

function count2(){
    
    /*if(i == 0){
        setInterval(count, 100);
    }*/
    let timerid = setInterval(function(){
        if(i < 10000000){
            for(let j = 0; j < 1000000; j++){
                i++;
            }
        }
    }, 500);
    
    function checkTimeout(){
        if(i == 10000000){
            alert("Done in " + (Date.now() - start) + 'ms');
            alert(i + " ! ");
            clearInterval(timerid);
        }else{
            setTimeout(checkTimeout, 200);
        }
        
    }
    
    setTimeout(checkTimeout, 600);
    
    
    
    
}
count2();
