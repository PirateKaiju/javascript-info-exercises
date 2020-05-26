styles = ["Jazz", "Blues"];
styles.push("Rock");
alert(styles);

styles[Math.floor(styles.length/2) + 1] = "Classics";

alert(styles.shift());
styles.unshift("Rap", "Reggae");
alert(styles);