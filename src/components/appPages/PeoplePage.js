import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import { PersonList, PersonDetails } from '../SWComponents';

const PeoplePage = ({ history, match }) => {
    return(
        <ErrorBoundary>
            <Row 
                left={<PersonList onItemSelected={(itemId) => {
                    history.push(itemId);
                }} />}
                right={<PersonDetails itemId={match.params.id} />}
            />
        </ErrorBoundary>
    );
};

export default withRouter(PeoplePage);