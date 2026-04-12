# Fast React Pizza Co.

_This application focuse on performance, stability & optimization by using redux & react router advanced topic such as Form_

## Redux Topic:

**[Redux Toolkit](https://redux.js.org/introduction/installation)**

For Redux Toolkit Quick Install: `npm install @reduxjs/toolkit`

- [configureStore](https://redux.js.org/usage/configuring-your-store)
- [createSlice](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
- [createAsyncThunk](https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk)
- [createSelector](https://redux.js.org/usage/deriving-data-selectors#createselector-overview)

For React Redux Quick Install: `npm install react-redux`

- [provider](https://redux.js.org/tutorials/quick-start#provide-the-redux-store-to-react)
- [useSelector](https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector)
- [useDispatch](https://redux.js.org/tutorials/fundamentals/part-5-ui-react#dispatching-actions-with-usedispatch)

## React Router Topic:

**[React Router Declarative Mode](https://reactrouter.com/start/declarative/installation#introduction)**

React Router Declarative Mode quick install: `npm install react-router`

- [createBrowserRouter](https://reactrouter.com/6.30.3/routers/create-browser-router#createbrowserrouter)
- [RouterProvider](https://reactrouter.com/6.30.3/routers/router-provider#routerprovider)
- [Outlet](https://reactrouter.com/6.30.3/components/outlet#outlet)
- [useNavigate](https://reactrouter.com/6.30.3/hooks/use-navigate#usenavigate)
- [useNavigation](https://reactrouter.com/6.30.3/hooks/use-navigation#usenavigation)
- [redirect](https://reactrouter.com/6.30.3/fetch/redirect#redirect)
- [Link](https://reactrouter.com/6.30.3/components/link#link)

**Advanced:**

- [useLoaderData](https://reactrouter.com/6.30.3/hooks/use-loader-data)
- [useFetcher](https://reactrouter.com/6.30.3/hooks/use-fetcher#usefetcher)
- [Form](https://reactrouter.com/6.30.3/components/form#form)
- [useActionData](https://reactrouter.com/6.30.3/hooks/use-action-data#useactiondata)

### API:

Geocoding API: [Bigdatacloud](https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api)

### Others:

- Phone Number Regex: [UI Bakery](https://uibakery.io/regex-library/phone-number)
- Currency Converter: [Frankfurter](https://frankfurter.dev/v1/)

### Useful function:

**_format currency function_**

```js
export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}
```

**_format date function_**

```js
export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}
```

**_calculate minutes left function_**

```js
export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
```

### Generate Secret Key:

```sh
require('crypto').randomBytes(64).toString('hex')
# or
openssl rand -base64 32
```
