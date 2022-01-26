import React, { useEffect } from "react";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

import { Routes, Route } from "react-router-dom";

import CollectionPageContainer from "../collection/collection.container";

//redux
import { connect } from "react-redux";

//redux thunk
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

//saga
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionOverviewContainer />} />
        <Route
          exact
          path=":collectionId" //nested route
          element={<CollectionPageContainer />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()) only thunk
  //saga
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
