import React from "react";
import "./collection-overview.style.scss";
import PreviewCollection from '../preview-collection/preview-collection.component';

//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

import withRouter from "../../utils/function.until";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...ortherCollectionProps }) => (
      <PreviewCollection key={id} {...ortherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
  });
  
export default connect(mapStateToProps)(withRouter(CollectionOverview));