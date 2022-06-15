const print = async () => {
  console.log("1");
  console.log("2");
  await wait(4000);
  await second();
  console.log("3");
  console.log("4");
};

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  }).catch((err) => {
    resolve(time);
  });
};

const second = () => {
  setTimeout(() => {
    console.log("hhhhhh");
  }, 1500);
};

print();


route stool lawsuit vanish rice drip toe sock clay goat tribe script
