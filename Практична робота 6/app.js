function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeout)
    )
  ]);
}


async function loadData() {
  const results = await Promise.allSettled([
    fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000),
    fetchWithTimeout("https://jsonplaceholder.typicode.com/users/1", 2000)
  ]);

  for (let r of results) {
    if (r.status === "rejected") {
      return "Request timeout";
    }
  }
  const post = await results[0].value.json();
  const user = await results[1].value.json();

  return { post, user };
}

loadData().then(result => {
  document.body.innerText = JSON.stringify(result, null, 2);
});