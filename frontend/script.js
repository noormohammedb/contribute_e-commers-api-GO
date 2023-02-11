console.log("Hello");
const myform = document.querySelector("#myform");
console.log("myform: ", myform);
myform.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  var formData = new FormData(event.target);

  // iterate through entries...
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  console.log(Object.fromEntries(formData));

  let data = JSON.parse(JSON.stringify(Object.fromEntries(formData)));

  console.log("data: ", data);

  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: { ...data },
  });

  // ...or output as an object
});
