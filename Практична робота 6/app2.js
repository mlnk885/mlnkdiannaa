function fetchData(id) {
  return new Promise((resolve) => {
    const time = Math.random() * 2000 + 1000; 

    setTimeout(() => {
      resolve("Data " + id + " (time: " + Math.floor(time) + "ms)");
    }, time);
  });
}


async function processData() {

  console.log("Паралельно:");

  const parallelResults = await Promise.all([
    fetchData(1),
    fetchData(2),
    fetchData(3)
  ]);

  console.log(parallelResults);

  console.log("Послідовно:");

  const tasks = [4, 5, 6].map(id => fetchData(id));

  for await (const result of tasks) {
    console.log(result);
  }
}

processData();