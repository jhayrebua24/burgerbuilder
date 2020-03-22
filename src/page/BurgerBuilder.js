import React, {
  useContext,
  useState,
} from 'react';
import { BurgerContext } from '../context/BurgerContextWrapper';
import Wrapper from '../components/Wrapper';
import {
  StyledLink,
  BuildSection,
} from '../components/StyledComponents';
import BurgerBuild from '../components/BurgerBuild';
import BurgerIngredientsMenu from '../components/BurgerIngredientsMenu';
import BurgerPriceLists from '../components/BurgerPriceLists';
import Loader from '../components/Loader/Loader';
import DialogPopup from '../components/DialogPopup';

const BurgerBuilder = () => {
  const { ingredients, addBurger } = useContext(BurgerContext);
  const [burgerContents, setBurgerContents] = useState([]);
  const [burgerName, setBurgerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      .then(() => {
        setLoading(false);
        setShowModal(true);
        removeAllStuffs();
      })
  }

  return (
    <Wrapper title="Build your burger">
      <StyledLink to="/">Display burgers</StyledLink>
      {loading && (<Loader />)}
      {showModal && (
        <DialogPopup
          okText="Add burger to cart"
          cancelText="Close"
          onCancel={() => setShowModal(false)}
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
