import React, {
  useContext,
  useState,
} from 'react';
import { BurgerContext } from '../context/BurgerContextWrapper';
import Wrapper from '../components/Wrapper';
import {
  BuildSection,
} from '../components/StyledComponents';
import BurgerBuild from '../components/BurgerBuild';
import BurgerIngredientsMenu from '../components/BurgerIngredientsMenu';
import BurgerPriceLists from '../components/BurgerPriceLists';
import Loader from '../components/Loader/Loader';
import DialogPopup from '../components/DialogPopup';

const BurgerBuilder = () => {
  const {
    ingredients, addBurger, addBurgerToCart,
  } = useContext(BurgerContext);
  const [burgerContents, setBurgerContents] = useState([]);
  const [burgerName, setBurgerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({ data: null, visible: false });

  const onChangeBurgerName = (e) => setBurgerName(e.target.value);

  const addStuffOnBurger = (stuff) => {
    if (burgerContents.length < 8) {
      setBurgerContents([
        ...burgerContents,
        stuff,
      ])
    }
  }

  const removeStuffOnBurger = (stuff) => {
    const burgerStuffs = [...burgerContents];
    const stuffKey = burgerContents.lastIndexOf(stuff);
    if (stuffKey !== -1) burgerStuffs.splice(stuffKey, 1);
    if (burgerStuffs.length === 0) setBurgerName('');
    setBurgerContents([
      ...burgerStuffs,
    ])
  }

  const removeAllStuffs = () => {
    setBurgerContents([]);
    setBurgerName('');
  }

  const onSubmitBurger = (e) => {
    e.preventDefault();
    setLoading(true);
    const value = { burgerContents, burgerName }
    addBurger(value)
      .then(({ newBuild }) => {
        setLoading(false);
        setModalData({
          visible: true,
          data: newBuild.id,
        });
        removeAllStuffs();
      })
  }

  return (
    <Wrapper title="Build your burger">
      {loading && (<Loader />)}
      {modalData.visible && (
        <DialogPopup
          okText="Add burger to cart"
          cancelText="Close"
          message="burger added"
          onOk={() => {
            addBurgerToCart(modalData.data)
            setModalData({ data: null, visible: false })
          }}
          onCancel={() => setModalData({ data: null, visible: false })}
        />
      )}
      <BuildSection>
        <BurgerBuild
          burgerContents={burgerContents}
        />
        <BurgerIngredientsMenu
          burgerContents={burgerContents}
          ingredients={ingredients}
          addStuffOnBurger={addStuffOnBurger}
          removeStuffOnBurger={removeStuffOnBurger}
          removeAllStuffs={removeAllStuffs}
        />
        <BurgerPriceLists
          ingredients={ingredients}
          burgerContents={burgerContents}
          burgerName={burgerName}
          onChangeBurgerName={onChangeBurgerName}
          onSubmitBurger={onSubmitBurger}
        />
      </BuildSection>
    </Wrapper>
  )
}

export default BurgerBuilder
