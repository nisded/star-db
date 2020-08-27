import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const withData = (View) => {
    return class extends Component {
        constructor() {
            super();
            
            this.state = {
                data: null,
                loading: true,
                error: false
            };
        }
    
        componentDidMount() {
            this.props.getData()
                .then(data => this.setState({ 
                    data,
                    loading: false,
                    error: false
                }))
                .catch(() => this.setState({
                    error: true,
                    loading: false
                }));
        }

        render() {
            const {data, loading, error } = this.state;

            if (loading)
                return <Spinner />

            if (error)
                return <ErrorIndicator />

            return (
                <View {...this.props} data={data} />
            );
        }
    }
};

export default withData;