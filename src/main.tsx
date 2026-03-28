import App from './app'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
const rootDiv = document.querySelector("#root")
import { Provider } from 'react-redux'
import { store } from './store'
if (rootDiv) {
  const obj = createRoot(rootDiv)
  obj.render(
    <Provider store={store}>

      <BrowserRouter>
        <App></App>

      </BrowserRouter>
    </Provider>
  )

}