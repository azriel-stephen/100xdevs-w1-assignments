// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const showCurrentTime = () => {
  const int = setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours() + 12;
    let hours12 = hours;
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours12 = hours - 12;
      }
    }
    const time24 = `${hours >= 10 ? hours : "0" + hours}:${minutes}:${seconds}`;
    const time12 = `${
      hours12 >= 10 ? hours12 : "0" + hours12
    }:${minutes}:${seconds}:${ampm}`;

    console.log(" 24H   - ", time24);
    console.log(" AM/PM - ", time12);
    console.log("\n");
  }, 1000);
};

showCurrentTime();
