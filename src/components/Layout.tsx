import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import MouseTracker from "./MouseTracker"
import ScrollProgress from "./ScrollProgress"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <MouseTracker />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
