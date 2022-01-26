import React, {useEffect} from "react";
import "./collection.style.scss";

import withRouter from "../../utils/function.until";

//redux
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ router }) => {
  const {collectionId} = router.params;
  const collection = useSelector(selectCollection(collectionId));
  useEffect(() => {
    console.error('1');
    return ()=> {
      console.error('2');
    }
  });
  const {title, items} = collection;
  
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPage);
