import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKeyboards } from "../../../store/slices/keyboards/keyboards";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { Header2 } from "../../Header/Header2";
import { STORE } from "../../Helpers/Data";
import { Menu } from "../../Menu/Menu";
import { SocialMedia } from "../../SocialMedia/SocialMedia";

export const Keyboards = () => {
  const dispatch = useDispatch();
  const { keyboards = [] } = useSelector((state) => state.keyboards);

  useEffect(() => {
    dispatch(getKeyboards(STORE[0][4]));
  }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      <Header2 />
      <Menu />
      <h2 className="titlecategory">KEYBOARDS </h2>
      <div className="contenedorCard">
        {keyboards.map((item) => (
          <div className="bodyCard" key={item.id}>
            <div className="containerImagen">
              <img className="imagenCard" src={item.pic} alt="foto" />
            </div>

            <div className="containerInforCard">
              <div className="info">
                <h1 className="name">{item.name} </h1>
                <p className="description">{item.description} </p>
                <p className="marc">{item.marc} </p>
                <p className="starts">{item.star} </p>
              </div>

              <div className="containerInforPrice">
                <p className="price">{item.price} </p>
                <p className="offert">{item.priceDesc}</p>
                <p className="desc">{item.desc} </p>
              </div>

              <div className="buttonsAdd">
                <button className="buttoAddCart">ADD TO CART</button>
                <button className="moreInfo">MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SocialMedia />
      <Footer />
    </>
  );
};
