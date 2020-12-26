const greeter: string = `<h1>Hello World!</h1>`;
console.log(greeter);

const div = document.createElement("div");
div.innerHTML = greeter;

const container = document.querySelector("#root");

container?.appendChild(div);
