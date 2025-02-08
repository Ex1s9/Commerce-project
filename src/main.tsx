import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import s from './Main.module.scss'

createRoot(document.getElementById('root')!).render(
  <div className={s.App}>
    <App />
  </div>
)
