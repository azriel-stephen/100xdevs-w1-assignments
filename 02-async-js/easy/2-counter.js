// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter_does_not_work(time) {
  for (var i = 1; i <= time; i++) {
    console.log(i);
    setTimeout(() => console.log(i), 1000);
  }
}

function counter(time) {
  var i = 1;
  function printCounter() {
    console.log(i);
    i++;
    if (i <= time) {
      setTimeout(printCounter, 1000);
    }
  }
  printCounter();
}
counter(5);
