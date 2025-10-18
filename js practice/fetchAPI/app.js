const URL = "https://emojihub.yurace.pro/api/all";
let num = document.querySelector("#code");
let btn = document.querySelector("#btn");
let entnum;

function emoji() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      num.addEventListener("input", () => {
        entnum = Number(num.value); 
        console.log(entnum);
        if (entnum >= 0 && entnum < data.length) {
          btn.addEventListener('click', () =>{
            document.querySelector("#emo").innerHTML = data[entnum].htmlCode;
          })
        } else {
          document.querySelector("#emo").innerHTML = "Invalid number";
        }
      });
    });
}

emoji();

/*
const emoji = async () => {
  let response = await fetch(URL);
  console.log(response); //json format
  let data = await response.json();
  console.log(data[10].htmlCode);
  let emojicode = data[10].htmlCode;
  document.querySelector("#emo").innerHTML = emojicode;
};
*/

//Another way

