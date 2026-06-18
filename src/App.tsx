import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import ErrorBoundary from "./components/ErrorBoundary"
import Layout from "./components/Layout"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Services = lazy(() => import("./pages/Services"))
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"))
const CaseStudies = lazy(() => import("./pages/CaseStudies"))
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"))
const Insights = lazy(() => import("./pages/Insights"))
const InsightDetail = lazy(() => import("./pages/InsightDetail"))
const Contact = lazy(() => import("./pages/Contact"))
const WorkWithUs = lazy(() => import("./pages/WorkWithUs"))
const Legal = lazy(() => import("./pages/Legal"))
const NotFound = lazy(() => import("./pages/NotFound"))
const ThankYou = lazy(() => import("./pages/ThankYou"))

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    }>
      {children}
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
              <Route path="/about" element={<SuspenseWrapper><About /></SuspenseWrapper>} />
              <Route path="/services" element={<SuspenseWrapper><Services /></SuspenseWrapper>} />
              <Route path="/services/:slug" element={<SuspenseWrapper><ServiceDetail /></SuspenseWrapper>} />
              <Route path="/case-studies" element={<SuspenseWrapper><CaseStudies /></SuspenseWrapper>} />
              <Route path="/case-studies/:slug" element={<SuspenseWrapper><CaseStudyDetail /></SuspenseWrapper>} />
              <Route path="/insights" element={<SuspenseWrapper><Insights /></SuspenseWrapper>} />
              <Route path="/insights/:slug" element={<SuspenseWrapper><InsightDetail /></SuspenseWrapper>} />
              <Route path="/contact" element={<SuspenseWrapper><Contact /></SuspenseWrapper>} />
              <Route path="/work-with-us" element={<SuspenseWrapper><WorkWithUs /></SuspenseWrapper>} />
              <Route path="/legal" element={<SuspenseWrapper><Legal /></SuspenseWrapper>} />
              <Route path="/thank-you" element={<SuspenseWrapper><ThankYou /></SuspenseWrapper>} />
              <Route path="*" element={<SuspenseWrapper><NotFound /></SuspenseWrapper>} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  )
}
