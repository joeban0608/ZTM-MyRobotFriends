import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            // 你可以render 任何客製化的 fallback UI
            return <h1><span>Oops. That is not good</span></h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary