//your JS code here. If required.
function delayedHello() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

async function updateOutput() {
  const outputElement = document.getElementById("output");
  const message = await delayedHello();
  outputElement.innerText = message;
}

document.addEventListener("DOMContentLoaded", updateOutput);
