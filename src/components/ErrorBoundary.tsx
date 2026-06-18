import { Component, type ReactNode, type ErrorInfo } from "react"
import { Link } from "react-router-dom"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface px-6">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold font-heading text-text">Something broke</h1>
            <p className="mt-4 text-text-muted">An unexpected error occurred. Our engineering team has been notified.</p>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false })}
              className="inline-block mt-8 bg-accent text-white px-6 py-3 rounded-xl font-medium hover:bg-accent-hover transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
