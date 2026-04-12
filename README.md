# Fast React Pizza Co.

_This application focuse on performance, stability & optimization by using redux & react router advanced topic such as useLoaderData, useFetcher, Form, useActionData_

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

- 100 CSS loaders: [Dev | Temani Afif](https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje)
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

### Application Data:

**Check order list ID:** _IIDSAT_ </br>
**Cart Object:**

```js
[
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];
```

**Order Object:**

```js
{
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
}
```

**Loading Loader CSS:**

```css
.loader {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#333 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 50%;
  animation: loading 1s infinite linear;
}

@keyframes loading {
  20% {
    background-position:
      0% 0%,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }
  60% {
    background-position:
      0% 50%,
      50% 100%,
      100% 0%;
  }
  80% {
    background-position:
      0% 50%,
      50% 50%,
      100% 100%;
  }
}
```

### Generate Secret Key:

```sh
require('crypto').randomBytes(64).toString('hex')
# or
openssl rand -base64 32
```
