# Sing me a Song

Sing me a Song is a application for videos recommendations. The recommendation is given based on their score.

## Implemented features

- Add a new music recommendation
- Like or dislike (up or down vote)
- Get a list with the videos with the hightest scores
- Get a random video recommendation

## Technologies

<p>
  <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt="React" />

  <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt="React-Router-Dom"/>

  <img src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational' alt="Axios">
  
  <img src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white' alt='Styled Components' />
  
  <img src='https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white' alt='Cypress' />
</p>

## How to run

1. Clone this repository

```bash
git clone git@github.com:acolima/sing-me-a-song.git
```

2. Go to the project directory

```bash
 cd sing-me-a-song
```

3. Install dependencies

```bash
npm i
```

4. Run project with

```bash
npm start
```

5. You can optionally build the project running

```bash
npm run build
```

6. Finally access http://localhost:3000 on your browser (port number may vary in some cases)

7. The requests are made from a URL that must be placed in an enviroment variable in the `.env` file (see `.env.example` file)

8. You can check the back-end repository of this project at https://github.com/acolima/sing-me-a-song-api and follow the instructions to run

## How to run the tests

1. Install cypress
```bash
npm i -D cypress eslint-plugin-cypress
```

2. Run
```bash
npx cypress open
```
This will open the cypress window
