const fs = require("fs");
const n = fs.readFileSync("/dev/stdin").toString() * 1;

const DP = new Array(n + 1).fill(0);

DP[1] = 1;
DP[2] = 2;
for (let i = 3; i <= n; i++) {
  DP[i] = (DP[i - 2] + DP[i - 1]) % 10007;
}

console.log(DP[n]);
