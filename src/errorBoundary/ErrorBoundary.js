import { Component } from 'react'

class ErrorBoundary extends Component {

    state = {
        error: null,
        errorInfo: null,
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {

        if (this.state.errorInfo) {
            return (
              <div>
                <h2>Something went wrong. Please refresh.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                </details>
              </div>
            );
          }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary
