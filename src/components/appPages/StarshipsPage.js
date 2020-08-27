import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';
import { StarshipList } from '../SWComponents';

const StarshipsPage = ({ history }) => {
    return(
        <ErrorBoundary>
            <StarshipList onItemSelected={(itemId) => {
                history.push(itemId);
            }} />
        </ErrorBoundary>
    );
};

export default withRouter(StarshipsPage);