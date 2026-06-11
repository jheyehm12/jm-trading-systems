import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { AIAutomationProjectsPage } from './pages/AIAutomationProjectsPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProjectsOverviewPage } from './pages/ProjectsOverviewPage'
import { QAValidationProjectsPage } from './pages/QAValidationProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { SkillsPage } from './pages/SkillsPage'
import { FullStackTradingPage } from './pages/FullStackTradingPage'
import { TradingProjectsPage } from './pages/TradingProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsOverviewPage />} />
          <Route path="projects/trading" element={<TradingProjectsPage />} />
          <Route
            path="projects/full-stack"
            element={<FullStackTradingPage />}
          />
          <Route
            path="projects/ai-automation"
            element={<AIAutomationProjectsPage />}
          />
          <Route
            path="projects/qa-validation"
            element={<QAValidationProjectsPage />}
          />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
