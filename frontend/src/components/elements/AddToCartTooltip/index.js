import { Alert, AlertTitle, Snackbar } from '@mui/material';
import React, { useContext } from 'react';
import { UIContext } from '../../../context/UIContext';

export default function AddToCartTooltip() {
  const { isProductAddedToCart, setIsProductAddedToCart } =
    useContext(UIContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsProductAddedToCart(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isProductAddedToCart}
        autoHideDuration={1500}
        onClose={handleClose}>
        <Alert severity='success' onClose={handleClose} sx={{ width: '100%' }}>
          <AlertTitle>Добавлено</AlertTitle>
          Товар успешно добавлен в корзину
        </Alert>
      </Snackbar>
    </>
  );
}
