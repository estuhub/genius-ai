This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Packages Used in this Project

## Components Library: ShadCN/UI
For reusable NextJS components. For more info, check [documentation](https://ui.shadcn.com/docs).

## Authetincation: Clerk
Security and authentications handled by a third party company. For more info, check  the [documentation](https://clerk.com/docs).

## AI: openai
Create an account in [openai.com](https://openai.com/). \
For API [documentation](https://platform.openai.com/docs/overview.). \
For npm package [documentation](https://www.npmjs.com/package/openai). \
To install: `npm i openai`

## HTTPS Requests Management: Axios
A simple, promise-based HTTP client for making requests to a RESTful API. For more info, check [documentation](https://axios-http.com/docs/intro).

## react-markdown
A React component that parses markdown and renders it to HTML. For more info, check [documentation](https://www.npmjs.com/package/react-markdown).

## replicate
Create an account in [replicate.com](https://replicate.com/) \
For API [documentation](https://replicate.com/docs). \
For npm package [documentation](https://www.npmjs.com/package/replicate). \
To install: `npm i replicate` \
To choose the audio generation API, go to Explore --> Audio Generation --> [Riffusion](https://replicate.com/riffusion/riffusion/api?tab=nodejs) and follow the commands.

To choose the video generation API, use the search and find [Zeroscope](https://replicate.com/anotherjesse/zeroscope-v2-xl?input=nodejs).

## Database Management: Prisma & Prisma Client
Simplify database access and management. For more info, check [documentation](https://www.prisma.io/docs). \
To install: `npm i -D prisma @prisma/client` \
To initialize: `npx prisma init` \
To generate DB: `npx prisma generate` \
To add/update schema in DB: `npx prisma db push` \
To reset DB: `npx prisma migrate reset` \

## Database: MongoDB
For integration with [Prisma](https://www.prisma.io/docs/orm/overview/databases/mongodb#:~:text=Some%20aspects%20of%20using%20Prisma,using%20the%20mongodb%20database%20connector). \
For prisma schema using MongoDB, check [documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/creating-the-prisma-schema-typescript-mongodb).

## State Management: Zustand
Library for React applications that provides a simple and flexible way to manage global state. For more info, check [documentation](https://docs.pmnd.rs/zustand/getting-started/introduction).
