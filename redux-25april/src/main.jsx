
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import buttonSlice from './store'
import React from 'react'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode> 
      <Provider store={buttonSlice}>
      <App/>
      </Provider>
    </React.StrictMode> 
  
)
