### typescript error

`The error message "No overload matches this call" typically occurs in TypeScript when you attempt to call a function or method with arguments that do not match any of its defined overloads. "No overload matches": This indicates that TypeScript cannot find a matching function signature for the arguments you've provided.`

`Understanding Function Overloads.In TypeScript, a function can have multiple signatures, known as overloads. Each overload describes a different way the function can be called with different argument types or numbers.`

### Step 0: Create [vite](https://vitejs.dev/guide/) Project and [tailwind](https://tailwindcss.com/docs/guides/vite)

```bash
npm create vite@latest
```

### Step 1: install Dependencies

```bash
 npm install react-router-dom react-hook-form antd
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
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── CreateAdmin.tsx
│   │   │   ├── CreateStudent.tsx
│   │   │   └── CreateFaculty.tsx
│   │   ├── /faculty
│   │   │   ├── FacultyDashboard.tsx
│   │   │   └── OfferedCourse.tsx
│   │   ├── /student
│   │   │   ├── StudentDashboard.tsx
│   │   │   └── OfferedCourse.tsx
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
│   │   ├── faculty.route.tsx
│   │   ├── route.tsx
│   │   └── student.route.tsx
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

### Step 4: Setup [route](https://github.com/SumonRahman24/ph-university/tree/main/ph-university-client/src/routes) | [sidebar](https://github.com/SumonRahman24/ph-university/blob/main/ph-university-client/src/components/layouts/Sidebar.tsx) | [layout](https://github.com/SumonRahman24/ph-university/tree/main/ph-university-client/src/components/layouts) | [redux ](https://github.com/SumonRahman24/ph-university/tree/main/ph-university-client/src/redux)
