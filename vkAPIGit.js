const id = "";
const token = "";
var script = document.createElement("script");
script.src = `https://api.vk.com/method/wall.get?owner_id=${id}&count=3&filter=owner&extended=1&v=5.131&access_token=${token}`;
document.getElementsByTagName("head")[0].appendChild(script);
function callbackFunc(result) {
  console.log(result);
}

// const ownerId = ""; // Id human or group whose wall post do you think to get
// const yourAccessToken =
//   "";

//   fetch(
//     `https://api.vk.com/method/wall.get?owner_id=229186789&count=3&filter=owner&extended=1&v=5.131&access_token=${yourAccessToken}`,
//     { mode: "no-cors" }
//   )

// fetch(
//   `https://api.vk.com/method/wall.get?owner_id=229186789&count=3&filter=owner&extended=1&v=5.131&access_token=34a7997b34a7997b34a7997bee34fd60f4334a734a7997b55b505a9cc6fa2f218b0c16b`,
//   { mode: "no-cors" }
// )
//   .then((response) => response.json())
//   .then((responseData) => {
//     // citiesStatesCopy.push(responseData);
//     // console.log(citiesStatesCopy);
//     // for (resp of citiesStatesCopy[0].areas) {
//     //   for (city of resp.areas) {
//     //     allCities.push({ city: city.name, state: resp.name });
//     //   }
//     // }
//   });
