import React from "react";
import PropTypes from 'prop-types';
import ItemsCounter from '../atoms/ItemsCounter';


export default function CardsProducts({
  imgSrc = '../../Placeholders/imagem-produto-1.jpeg',
  imgLink = 'http://pudim.com.br/',
  productName = 'Nome do produto',
  precoProduto = '9,99'}) {

  return (
    <div>
      <p>R${ precoProduto }</p>
      <a href={ imgLink }><img src={ imgSrc } /></a>
      <p>{ productName }</p>
      <ItemsCounter />
    </div>
  )
}

CardsProducts.propTypes = {
  imgLink: PropTypes.string,
  imgSrc: PropTypes.string,
  precoProduto: PropTypes.string,
  productName: PropTypes.string
}


