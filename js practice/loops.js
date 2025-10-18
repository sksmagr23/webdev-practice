let a = 1;
for (let k = 0; k < 10; k++) {
  console.log(a + k);
}
let obj = {
  name: "Harry",
  role: "Programmer",
  company: "CodeWithHarry AI",
};

for (const key in obj) {
  console.log(key);
}

for (const c of "Harry") {
  console.log(c);
}

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

let j = 10;
do {
  console.log(j);
  j++;
} while (j < 6);
