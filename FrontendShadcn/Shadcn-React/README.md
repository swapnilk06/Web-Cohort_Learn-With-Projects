# Shadcn with ReactJS using Vite

#### Installation

1] `npm create vite@latest`
2] `npm install`
3] `npm install tailwindcss @tailwindcss/vite`

4] Create `jsconfig.json` file

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@ui/*": ["src/components/ui/*"]
    }
  }
}
```

5] Update `vite.config.js` file

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

6] Import Tailwind CSS & update with -> `src/index.css`
```
@import "tailwindcss";
```

7] `npx shadcn@latest init`

8] Start adding component -> `npx shadcn@latest add button`

###### <i>Shadcn with reactJS installation with working done. </i>