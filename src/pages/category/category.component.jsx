import React from "react";
import './category.style.scss';

import withRouter from "../../utils/function.until";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = ({router}) => {
    console.log(router);
    return (
    <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>
)};

export default withRouter(CategoryPage);