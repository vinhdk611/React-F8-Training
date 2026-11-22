import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import UseStateTraining from './training/UseStateTrain.jsx'
import UseEffectTrain from './training/UseEffectTrain.jsx'
import UseLayoutEffectTrain from './training/UseLayoutEffectTrain.jsx'
import UseRefTrain from './training/UseRefTrain.jsx'
import UseReducerTrain from './training/useReducerPack/UseReducerTrain.jsx'
import UseContextTrain from './training/useContextPack/UseContextTrain.jsx'
import { StoreProvider } from './training/ultimateTraining/index.js'
import App from './training/ultimateTraining/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <App/>
    </StoreProvider>
  </StrictMode>,
)
