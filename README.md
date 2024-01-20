# Expense tracker

<!-- ### [Demo](https://dpdms.up.railway.app/) -->

<!-- Demo credential

```
email: maruffamd@gmail.com
password: 123456
``` -->

## Getting Started

This instruction will get you a copy of this project up and running on your local machine

## Docker setup 🐳

Run the following docker compose command:

```sh
docker compose up
```

It'll setup necessary environment and run the following servers:
An backend will be run at <http://localhost:3000>
An backend swagger docs will be run at <http://localhost:3000/v1/docs>
And frontend will be run at <http://localhost:5173>


## Manual setup

### Prerequisites

You need [Node JS](https://nodejs.org) (v18.x.x) installed on your local machine.

### Installing ⚙️

Run the followning command to install all the packages:

```sh
yarn setup
```

#### Setup Environment Variable

Set the following environment variable to `backend` directory. Also, an example file is given with the name of `.env.example`:

```sh
PORT=3000
HOST=http://localhost:3000

DATABASE_URL="postgresql://username:password@localhost:5432/expense_tracker"

JWT_SECRET=thisisasamplesecret
JWT_ACCESS_EXPIRATION_MINUTES=30
JWT_REFRESH_EXPIRATION_DAYS=30
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=10
```

### Database Migration 💿

Run the followning command to migrate the prisma schema:

```sh
yarn db:migrate
```

This command also perform seed 🌱 to your database with some preset dataset.

<!-- #### Seed Database (optional) 🌱

Run the following command to seed your database with some preset dataset.

```sh
cd backend
yarn seed
``` -->

#### Run 🏃🏻‍♂️

By this command your frontend and backend server will be run concurrently

```sh
yarn start
```

An backend will be run at <http://localhost:3000>
An backend swagger docs will be run at <http://localhost:3000/v1/docs>
And frontend will be run at <http://localhost:5173>

#### Test user credential

Use this credential to log into the test user account

```sh
email: test@gmail.com
password: password123
```

## Built With 🏗️👷🏻

- [NodeJs](https://nodejs.org/en/) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
- [ExpressJs](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js.
- [Prisma](https://nestjs.com/) - Next-generation Node.js and TypeScript ORM
- [React](https://react.dev) - The library for web and native user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes
- [Shadcn/ui](https://ui.shadcn.com) - Tailwind and RadixUi based component library

## Authors

- **Md Maruf Ahmed** - _Software Engineer_
