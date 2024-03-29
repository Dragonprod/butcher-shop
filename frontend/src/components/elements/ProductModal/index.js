import Modal from '../Modal';
import styles from './ProductModal.module.scss';
import { UIContext } from '../../../context/UIContext';
import { useContext } from 'react';

export default function ProductModal() {
  const {
    selectedProduct,
    cartProducts,
    setCartProducts,
    setIsProductAddedToCart,
    setTotalPrice,
    cartProductsWithAmount,
    setCartProductsWithAmount,
  } = useContext(UIContext);

  const handleAddToCart = () => {
    if (cartProducts.indexOf(selectedProduct) === -1) {
      setCartProducts([...cartProducts, selectedProduct])
      setIsProductAddedToCart(true);
      setTotalPrice(prevAmount => prevAmount + selectedProduct.price)
      if (cartProductsWithAmount[selectedProduct.id] === undefined) {
        setCartProductsWithAmount(prevState => ({ ...prevState, [selectedProduct.id.toString()]: 1 }))
      }
    }
  };

  return (
    <Modal>
      <div className={styles.mainGrid}>
        <div className={styles.photoContainer}>
          <img src={selectedProduct.photoUrl} alt={selectedProduct.name} />
        </div>
        <div className={styles.contentContainer}>
          <div
            className={`${styles.infoContainer} ${styles.descriptionContainer}`}>
            <h2>{selectedProduct.name}</h2>
            <h3>Описание продукта:</h3>
            <p>{selectedProduct.description}</p>
          </div>
          <div
            className={`${styles.infoContainer} ${styles.characteristicContainer}`}>
            <div>
              <h3>Вес продукта:</h3>
              <p>{selectedProduct.weight} кг</p>
            </div>
            <div>
              <h3>Срок годности:</h3>
              <p>{selectedProduct.expirationDate} суток</p>
            </div>
            <div>
              <h3>Условия хранения:</h3>
              <p>{selectedProduct.storageConditions}</p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.mixtureContainer}`}>
            <h3>Состав:</h3>
            <p>{selectedProduct.composition}</p>
          </div>
          <div className={`${styles.infoContainer} ${styles.priceContainer}`}>
            <h4>{selectedProduct.price} ₽</h4>
            <button
              className={styles.cartButton}
              onClick={() => handleAddToCart()}>
              В корзину
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
