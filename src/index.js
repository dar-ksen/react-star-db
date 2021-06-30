const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url} receiver ${res.status}`)
  }
  const body = await res.json();
  return body;
}

getResource('https://swapi.dev/api/planets/12312341/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error(err);
  })
