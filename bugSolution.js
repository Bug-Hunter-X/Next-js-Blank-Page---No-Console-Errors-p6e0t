```javascript
// pages/_app.js
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Check for potential runtime errors or loading states
    // Implement any necessary logging or debugging
    // e.g., console.log('Component Mounted', Component, pageProps)
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
```