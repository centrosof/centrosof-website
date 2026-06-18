import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import MouseTracker from "./MouseTracker"
import ScrollProgress from "./ScrollProgress"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <MouseTracker />
      <Nav />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
