import Modal from '../Modal';
import styles from './ProductModal.module.scss';
import img1 from '../../../assets/images/1.png';

export default function ProductModal() {
  return (
    <Modal>
      <div className={styles.mainGrid}>
        <div className={styles.photoContainer}>
          <img src={img1} alt='nice' />
        </div>
        <div className={styles.contentContainer}>
          <div>
            <h3>Описание продукта:</h3>
            <p>
              мини наггетсы – это не только куриное филе в тонкой хрустящей
              панировки, но и мини размер и разнообразные формы, которые
              обязательно понравятся детям.
            </p>
          </div>
          <div>
            <div>
              <h3>Вес продукта:</h3>
              <p>0,250 кг</p>
            </div>
            <div>
              <h3>Срок годности:</h3>
              <p>425 суток</p>
            </div>
            <div>
              <h3>Условия хранения:</h3>
              <p>не выше -18°С</p>
            </div>
          </div>
          <div>
            <h3>Состав:</h3>
            <p>
              филе грудки кур замороженное, вода питьевая, мука пшеничная, масло
              растительное подсолнечное рафинированное дезодорированное,
              крахмалы (гороховый, картофельный), волокна пищевые (соевые),
              белок соевый, соль, загуститель гуаровая камедь, регулятор
              кислотности E451(i), стабилизаторы (Е450(iii), Е450(v)), дрожжи,
              куркума, ароматизатор натуральный, антиокислитель кислота
              аскорбиновая, краситель аннато.
            </p>
          </div>
          <div className={styles.priceContainer}>
            <h4>999 ₽</h4>
            <button className={styles.cartButton}>В корзину</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
