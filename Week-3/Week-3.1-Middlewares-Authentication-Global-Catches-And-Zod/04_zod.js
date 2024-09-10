const zod = require("zod");

// function validateInput(arr){
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(arr);
//     console.log(response);
// }

// validateInput(["1", 2, 3]);


function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "pranjalsingh.ak@gmail.com",
    password: "9819726578"
})