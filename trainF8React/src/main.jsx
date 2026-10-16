import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseStateTraining from './training/UseStateTrain.jsx'
import UseEffectTrain from './training/UseEffectTrain.jsx'

//fake comments
//tạo custom event, mỗi 2s thì viết comment này
function emitComment(id){
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffectTrain />
  </StrictMode>,
)
