const fs = require("fs");
let n = fs.readFileSync("/dev/stdin").toString() * 1;

for (let i = 1, j = 1; i <= n; i++, j += 2) {
  console.log(`${" ".repeat(n - i)}${"*".repeat(j)}`);
}
