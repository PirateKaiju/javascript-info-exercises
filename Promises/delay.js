function delay(ms) {
  // your code
  return new Promise(function(resolve, reject){
      
      setTimeout(() => resolve("ok"), ms);
  });
}

delay(3000).then(() => alert('runs after 3 seconds'));
