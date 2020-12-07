// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasErrors: true };
  }
  componentDidCatch(error, info) {
    console.error('Error boundary caught an error', error, info);
  }
  componentDidUpdate() {
    if (this.state.hasErrors) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }
    if (this.state.hasErrors) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to back to the home page or wait five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
