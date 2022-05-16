import styles from './OrderItem.module.scss';

const OrderItem = ({ orderItem }) => {
  console.log(orderItem)
  return (
    <li className={styles.itemContainer}>
      <div className={styles.idContainer}>
        <h4>{orderItem.id}</h4>
      </div>
      <div className={styles.ordersContainer}>
        {Object.values(orderItem.productsWithAmount).map(product => (
          <div key={product.id} className={styles.productContainer}>
            <img src={product.photoUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div className={styles.dateContainer}>
        <h4>{orderItem.createdAt}</h4>
      </div>
      <div className={styles.sumContainer}>
        <h4>{orderItem.totalSum} ₽</h4>
      </div>
      <div className={styles.statusContainer}>
        {orderItem.complete ? (
          <h4 style={{ color: 'green' }}>Оплачено</h4>
        ) : (
          <h4 style={{ color: 'red' }}>В процессе</h4>
        )}
      </div>
    </li>
  );
};

export default OrderItem;
