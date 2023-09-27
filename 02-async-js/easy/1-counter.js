// function counter(time) {
//   let i = 0;
//   setTimeout(() => {
//     setInterval(() => console.log(i++), 1000);
//   }, time);
// }

counter(10);

function counter(time) {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i++);
    if (i > time) {
      clearInterval(interval);
    }
  }, 1000);
}
