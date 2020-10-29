# stylis-plugin-logical

Stylis plugin allowing the use of CSS Logical Properties and Values.

**Disclaimer**: Supports only stylis v3

[codesandbox example](https://codesandbox.io/s/stylis-plugin-logicalexample-re7zh)

## Usage

add `stylis-plugin-logical` to your project

```
npm install stylis-plugin-logical
```

### with emotion v10
```jsx
import { jsx, css, CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";
import stylisPluginLogical from "stylis-plugin-logical";


const cache = createCache({
  stylisPlugins: [stylisPluginLogical]
});

function Root({children}) {
  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  )
}
```
[codesandbox example](https://codesandbox.io/s/stylis-plugin-logical-emotion-v10-nx9mw?file=/src/App.js:701-761)
