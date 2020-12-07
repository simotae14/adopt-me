// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends Component {
  state = {
    hasErrors: false,
  };
  static getDerivedStateFromErrors() {
    return {
      hasErrors: true,
    };
  }
  componentDidCatch(error, info) {
    console.error('Error boundary caught an error', error, info);
  }
  render() {
    if (this.state.hasErrors) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to go back to the home page or wait five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
