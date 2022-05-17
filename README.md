# createContext
Create context for function

```
const ctx = createContext({ a: 1, b: "hello" }).bind({ a: 2, b: "world" });

ctx((param1, param2) => {
    console.assert(this.a === 2);
    console.assert(this.b === "world");

    console.assert(a === 1);
    console.assert(b === "hello");

    console.assert(param1 === 1);
    console.assert(param2 === 2);

    console.log("%cpassed!", "color: lime;");
}, 1, 2);
```
