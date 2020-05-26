function camelize(dsepared){
        let words = dsepared.split("-");
        return words.slice(0, 1) + words.slice(1).map((item)=>item.charAt(0).toUpperCase() + item.slice(1)).join("");
    }

alert(camelize("list-style-image"));