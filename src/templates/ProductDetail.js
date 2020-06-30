import React, { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../firebase/index'
import { makeStyles } from '@material-ui/core'
import HTMLReactParser from 'html-react-parser'

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 24px auto',
      width: 320,
      height: 320
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      width: 400,
      height: 400
    }
  },
  detail: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 16px auto',
      width: 320,
      height: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      width: 400,
      height: 'auto'
    }
  },
  price: {
    fontSize: 36
  }
}));

const returnCodeToBr = (text) => {
  if (text === '') {
    return text
  } else {
    return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
  }
}

const ProductDetail = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const path = selector.router.location.pathname;
  const id = path.split('/product/')[1];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    db.collection('products').doc(id).get()
      .then(doc => {
        const data = doc.data();
        setProduct(data)
      })
  }, []);

  return (
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>

          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{product.name}</h2>
            <p className={classes.price}>{product.price.toLocaleString()}</p>
            <div className="module-spacer--small" />
            <div className="module-spacer--small" />
            <p>{returnCodeToBr(product.description)}</p>            
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetail