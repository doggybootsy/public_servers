import React, { Component } from "react";

class ErrorBoundary extends Component<{
  fallback: React.ReactNode,
  children: React.ReactNode
}, {
  didError: boolean
}> {
  state = { didError: false }
  componentDidCatch(): void {
    this.setState({ didError: true });
  }
  render() {
    if (this.state.didError) return this.props.fallback;
    return this.props.children;
  };
};

export default ErrorBoundary;