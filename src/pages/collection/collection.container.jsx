import React from "react";
import {connect} from 'react-redux';
import  {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

//Hoc pattern
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps), WithSpinner
)(CollectionPage);

export default CollectionPageContainer;