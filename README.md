## Ehrlich weather app

---

### Production website

https://ehrlich-weather.marcopaps.com

### To start local development

First, create a `.env` file with the following keys and respective values.

```
REACT_APP_OPEN_WEATHER_APP_ID=
REACT_APP_AUTH0_CLIENT_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

After that, run the following commands in the terminal.

```
$ cd <path/to/app>

$ yarn

$ yarn start
```

---

### Technologies used

- `node.js` - js runtime environment

- `typescript` - js superset language

- `react` - frontend library

- `create-react-app` - react boilerplate

- `react-query` (in tandem with `axios`)- data fetching

- `auth0-react` - authentication

- `git` - version control

---

### Known issues

- Refreshing the page after logged in, renders the landing page
