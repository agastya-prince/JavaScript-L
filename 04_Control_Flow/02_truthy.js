// falsy values

// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

userEmail = "agastya@ai";
console.log(userEmail);
if (userEmail.length === 0)
{
    console.log("Array is empty");
}
else
{
    console.log("Array is not empty");
}

// Nullish Coalescing Operator (??) : null undefined