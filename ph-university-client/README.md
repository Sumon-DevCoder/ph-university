### Step 0: Create [vite](https://vitejs.dev/guide/) Project and [tailwind](https://tailwindcss.com/docs/guides/vite)

```bash
npm create vite@latest
```

### Step 1: install Dependencies

```bash
 npm install react-router-dom react-hook-form antd @reduxjs/toolkit react-redux sonner jwt-decode @hookform/resolvers zod
```

### Step 2: Folder Structure

```
/project-root
├── /src
│   ├── /assets
│   │   ├── /icons
│   │   └── /images
│   ├── /components
│   │   ├── /form
│   │   ├── /layout
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   └── /ui
│   ├── /hooks
│   ├── /lib
│   ├── /pages
│   │   ├── /admin
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── /redux
│   │   ├── /api
│   │   │   └── baseApi.ts
│   │   ├── /features
│   │   │   ├── /auth
│   │   │   │   ├── authApi.ts
│   │   │   │   └── authSlice.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── /routes
│   │   ├── admin.route.tsx
│   │   ├── route.tsx
│   ├── /utils
│   │   ├── routesGenerator.ts
│   │   ├── sidebarItemsGenerator.ts
│   │   └── verifyToken.ts
│   └── /types
│       ├── index.ts
│       └── sidebar.types.ts
├── .env.local
├── .env.example
└── package.json
```

## Step 4: [Setup Routes](https://github.com/SumonRahman24/ph-university/tree/main/ph-university-client/src/routes)

- admin.routes.tsx
- faculty.routes.tsx
- student.routes.tsx
- routesGenerator.ts
- route.tsx

## Step 5: [Setup Sidebar](https://github.com/SumonRahman24/ph-university/blob/main/ph-university-client/src/components/layouts/Sidebar.tsx)

- MainLayout.tsx
- SidebarGenerator.tsx
- Sidebar.tsx
- setup ph-univeristy logo

## Step 6: [Setup redux](https://redux-toolkit.js.org/introduction/getting-started)

- [follow doc](https://redux-toolkit.js.org/introduction/getting-started)
- authSlice.ts
- authApi.ts
- baseApi.ts → baseApi, prepare headers, baseQueryWithRefreshToken
- store.ts → store, persistor, default types
- protectedRoute.ts

## Step 7: [Setup Login](https://github.com/SumonRahman24/ph-university/blob/main/ph-university-client/src/pages/Login.tsx)

- PHForm.tsx
- PHInput.tsx
- login.tsx

## backend Project for depolyment steps

- create vercel.json
  **Paste this code in vercel.json file**

```sh
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js"
    }
  ]
}
```

- `npm run build` - for prodcution
- `vercel` - for create server
- `vercel --prod` - after changes server code
- Add environment info in vercel server
- Check vercel server by data fetching

## React Project For Deployment Steps

- fronted localhost url replace and implement server virtual url
- `npm run build` - for prodcution
- `vercel --prod` - save and after changes server code

-

# Caching in RTK Query

## Overview

Caching is a process that stores copies of data or computations in a temporary storage location (cache) so that future requests for that data can be served faster. When an application or a service retrieves data, it can store a copy in the cache. If the same data is requested again, the application can quickly return the cached data instead of fetching or recalculating it from the original source, which can be slower and more resource-intensive.

## Benefits of Caching in RTK Query

In the context of RTK Query (a tool from Redux Toolkit for fetching, caching, and synchronizing data), caching helps improve the efficiency of data fetching by:

### Reducing Redundant Requests

If the same data is requested multiple times, RTK Query can serve the data from the cache instead of making additional network requests.

### Improving Performance

By serving data from the cache, the application can respond more quickly to user interactions.

### Minimizing Server Load

Caching can reduce the number of requests made to the server, lowering the server's workload and potentially reducing costs.

## Conclusion

Utilizing caching in RTK Query enhances the efficiency and performance of data fetching operations in web applications, making them faster and more cost-effective.

# Understanding `credentials: "include"` in fetchBaseQuery Configuration

The `credentials: "include"` setting in the `fetchBaseQuery` configuration is essential for managing how cookies and other credentials are handled during cross-origin requests. This guide will explain its purpose and provide an example of its usage.

## Key Features of `credentials: "include"`

### 1. Inclusion of Credentials

- **Purpose**: Ensures that cookies, authorization headers, or TLS client certificates are included in the requests your application makes to the server.
- **Use Case**: Particularly useful for requests that require authentication and for maintaining user sessions.

### 2. Cross-Origin Requests

- **Default Behavior**: When making requests to a different origin (a different domain, protocol, or port), the browser's default behavior is to exclude credentials.
- **Setting `credentials: "include"`**: By explicitly setting `credentials: "include"`, you instruct the browser to include credentials in cross-origin requests.

### 3. Maintaining Sessions

- **Session Management**: If your server relies on cookies for session management, this setting ensures that the cookies are sent with every request, thereby maintaining the session.

## Example Usage

Consider an API hosted at `http://localhost:5000/` and a frontend running on a different origin (e.g., `http://localhost:3000/`). Setting `credentials: "include"` will ensure that cookies set by the backend are sent with each request from the frontend to the backend. This is crucial for actions that require the user to be authenticated.

### Example Code

```javascript
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/",
  credentials: "include", // Include credentials in cross-origin requests
});

export default baseQuery;
```

### typescript error

`The error message "No overload matches this call" typically occurs in TypeScript when you attempt to call a function or method with arguments that do not match any of its defined overloads. "No overload matches": This indicates that TypeScript cannot find a matching function signature for the arguments you've provided.`

`Understanding Function Overloads.In TypeScript, a function can have multiple signatures, known as overloads. Each overload describes a different way the function can be called with different argument types or numbers.`
