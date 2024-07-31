# Integrating react with the backend

In this class we've learned how to connect our app with a pre-existing backend. We've used the `axios` library to make requests to the backend and we've also learned how to use the `useEffect` hook to make requests when the component is mounted.

## Axios

In the previous lessons we have used the `fetch` function to make requests to the backend. However, we can also use the `axios` library to make requests. Axios is a promise-based HTTP client for the browser and node.js. It has a lot of features and is easy to use once you get the hang of it.

## useEffect to make requests

Since axios is also a promise-based library, we can use the `useEffect` hook to make requests to the backend. This way we can make requests when the component is mounted.

### Example

```jsx
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://api-url/products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {products.map((eachProduct) => (
        <p key={eachProduct.id}>{eachProduct.name}</p>
      ))}
    </div>
  );
}
```

Check the portal for more information. Today's code is explained step by step there.
