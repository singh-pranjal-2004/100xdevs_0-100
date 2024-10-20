const express = require('express');

const app = express();
const port = 3000;

function sum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

app.get('/', (req, res)=>{
    const n = req.query.n;
    const ans = sum(n);
    res.send(`Sum of ${n} natural numbers is: ${ans}`);
})

app.listen(port, ()=>{
    console.log(`Server is listening at port http://localhost:${port}`);
})