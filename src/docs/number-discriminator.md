# Partridge Helper functions

### Browser
```html
 <script src="https://unpkg.com/partridge@1.0.0/dist/partridge.browser.min.js"></script>
```

```js
const num = '12345';
Partridge.addDiscriminator(num); // default charecter is ','
// outputs '12,345'
Partridge.addDiscriminator('123456','/');
// outputs '123/456'
const str = '123,456,789';
Partridge.removeDiscriminator(str); // default charecter is ','
// outputs '123456789'
```

### CommonJs

```cjs
const Partridge = require('partridge');
const num = '12345';
Partridge.addDiscriminator(num); // default charecter is ','
// outputs '12,345'
Partridge.addDiscriminator('123456','/');
// outputs '123/456'
const str = '123,456,789';
Partridge.removeDiscriminator(str); // default charecter is ','
// outputs '123456789'
```

### Module System

```mjs
import Partridge from 'partridge';
const num = '12345';
Partridge.addDiscriminator(num); // default charecter is ','
// outputs '12,345'
Partridge.addDiscriminator('123456','/');
// outputs '123/456'
const str = '123,456,789';
Partridge.removeDiscriminator(str); // default charecter is ','
// outputs '123456789'

```
