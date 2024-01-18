import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getOneProduct } from '../../JS/Actions/product';
import './Description.css';

const Description = () => {
  const dispatch = useDispatch();
  const match = useMatch("description/:id");
  const productToGet = useSelector(state => state.productReducer.productToGet);

  useEffect(() => {
    dispatch(getOneProduct(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div className='description-container-1'>
      <h1 className='product-title'></h1>
      <div className='description-container'>
        <div>
          <p className='product-name'>{productToGet.name}</p>
          <img src={`/uploads/${productToGet.imageURL}`} width='250px' height='250px' alt='product' />

          <div className='info-container'>
            <div className='info-item'>
              <p className='info-value'>{productToGet.price} $</p>
            </div>
            <div className='info-item'>
              <p className='info-label'>Reference:</p>
              <p className='info-value'>{productToGet.reference}</p>
            </div>
          </div>

          <div className='description-item'>
            <p className='description-value'>{productToGet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
