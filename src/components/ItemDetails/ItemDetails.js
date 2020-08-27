import React, { Component } from 'react';

import './ItemDetails.css';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{`${label}:`}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export default class ItemDetails extends Component {
    constructor() {
        super();

        this.state = {
            item: null, 
            imageUrl: null,
            loading: false,
            error: false
        };

        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId)
            this.updateItem();
    }

    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId)
            return;
        this.setState({loading: true});

        getData(itemId)
            .then(item => this.setState({ 
                item, 
                imageUrl: getImageUrl(itemId), 
                loading: false, 
                error: false 
            }))
            .catch(err => this.setState({ error: true, loading: false }));
    }

    render() {
        if (!this.state.item && !this.state.loading && !this.state.error)
            return <p>Select a person from a list</p>;

        const loading = this.state.loading ? <Spinner /> : null;
        const error = this.state.error ? <ErrorIndicator /> : null;

        const content = !(loading || error) ? 
            <ItemView 
                item={this.state.item} 
                imageUrl={this.state.imageUrl} 
                children={this.props.children} 
            /> 
        : 
            null;

        return(
            <div className="item-details card d-flex flex-row">
                {loading}
                {error}
                {content}
            </div>
        );
    }
}

const ItemView = ({ item, imageUrl, children }) => {
    return (
        <React.Fragment>
            <img src={imageUrl} alt="item" />
            <div className="card-body">
                <h3>{item.name}</h3>
                <ul className="list-group list-group-flush">
                    {
                        // clones each child and adds new property (item) to this clone 
                        React.Children.map(children, child => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
};