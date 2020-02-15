import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CategoryPage from '../collection/collection';


const ShopPage = ({match}) => (

    <div className="shop-page">
    <Route exact path = {`${match.path}`}  component={CollectionsOverview} />  
    <Route path = {`${match.path}/:collectionID`} component={CategoryPage} />
    </div>
);

export default ShopPage;
