import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './chef_claude/index.css'
import { Page } from './chef_claude/chef_claude'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
