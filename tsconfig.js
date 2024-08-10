{
  "compilerOptions": {
    "target": "es6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "baseUrl": "./",
    "paths": {
      "*": ["*", "graphql/*", "test/*"],
      "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"],
      "react-loading-overlay": ["./types/react-loading-overlay"]
    },
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "experimentalDecorators": true,
    "incremental": true
  },
  "include": ["types/", "next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
