import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component';


const PreviewCollection = ({title, items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4) // chi hien thi 4 phan tu
                .map(item => (
              
                        <CollectionItem key= {item.id} item={item}></CollectionItem>
        
                ))
            }
        </div>
    </div>
); 


export default PreviewCollection;
