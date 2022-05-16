import styles from './OrderItem.module.scss';
import img from '../../../assets/images/login0.jpg';

const OrderItem = ({ orderItem }) => {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.idContainer}>
        <h4>{orderItem.id}</h4>
      </div>
      <div className={styles.ordersContainer}>
        {orderItem.products.map(product => (
          <div key={product.id} className={styles.productContainer}>
            <img src={img} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div className={styles.dateContainer}>
        <h4>{orderItem.createDate}</h4>
      </div>
      <div className={styles.sumContainer}>
        <h4>{orderItem.sum} ₽</h4>
      </div>
      <div className={styles.statusContainer}>
        {orderItem.isCompleted ? (
          <h4 style={{ color: 'green' }}>Оплачено</h4>
        ) : (
          <h4 style={{ color: 'red' }}>В процессе</h4>
        )}
        {/* <h4>{orderItem.isCompleted}</h4> */}
      </div>
    </li>
  );
};

export default OrderItem;
