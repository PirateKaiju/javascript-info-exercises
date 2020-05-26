function printList(list){
    
    alert(list.value);
    
    if(list.next !== null){
        
        return(printList(list.next));
    }
    
}

function printListRev(list){
    
    
    if(list.next !== null){
        
        printListRev(list.next);
    }
    
    alert(list.value);
    return;
    
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);
