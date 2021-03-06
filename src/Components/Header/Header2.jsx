import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RoutesApps } from "../Router/Routers";
import { useEffect, useState } from "react";
import { getSearch } from "../../store/slices/products";

export const Header2 = () => {
  const [search, setSeach] = useState("");
  const dispatch = useDispatch();
  const { cart = [] } = useSelector((state) => state.cart);


  useEffect(() => {
    dispatch(getSearch(search));
  }, [dispatch, search]);

  let searchProduct = (e) => {
    setSeach(e.target.value);
  };

  return (
    <div className="header2">
      <div className="contenedorLogo1">
        <Link to={RoutesApps.home}>
          <img
            className="logo1"
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
            alt="logo1"
          />
        </Link>
      </div>

      <div className="containerSeach">
        <input
          value={search}
          onChange={searchProduct}
          type="text"
          placeholder="Search"
          className="seach"
        />

        <button className="lupa">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="containerCart">
        <Link to={RoutesApps.cart} className="LinkCart">
          <div className="contenedorsumado">
            <span className="sumador">{cart.length}</span>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Link>
        {/* <p>Credit: 10000</p> */}
      </div>
    </div>
  );
};
