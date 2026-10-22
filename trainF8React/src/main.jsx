import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseStateTraining from './training/UseStateTrain.jsx'
import UseEffectTrain from './training/UseEffectTrain.jsx'
import UseLayoutEffectTrain from './training/UseLayoutEffectTrain.jsx'
import UseRefTrain from './training/UseRefTrain.jsx'
//fake comments
//tạo custom event, mỗi 2s thì viết comment này
// function emitComment(id){
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comment của lesson ${id}`
//       })
//     )
//   }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

// function emitChat(id){
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`chat-${id}`, {info: `Xin chao F8, toi la ${id}`})
//     )
//   }, 3000)
// }

// emitChat(1)
// emitChat(2)
// emitChat(3)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseRefTrain/>
  </StrictMode>,
)
