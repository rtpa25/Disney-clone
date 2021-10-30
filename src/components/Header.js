import styled from "styled-components";
import { useEffect } from "react";
import { Fragment } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../store/user-slice";

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  //handler to dispatch the setUserLoginDetails function from the state slice
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    const navigateOnAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          history.push("/home");
        }
      });
    };
    navigateOnAuth();
  }, [userName]);

  //the handler that is used for auth as the name suggests
  const authHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName && <Login onClick={authHandler}>LOGIN</Login>}
      {userName && (
        <Fragment>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="/images/original-icon.svg" alt="HOME" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImage src={userPhoto} alt={userName} />
        </Fragment>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #090b13;
  padding: 0 3.6rem;
  letter-spacing: 1.6rem;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 6rem;
  img {
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 2.5rem;

  a {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    img {
      height: 2rem;
      min-width: 2rem;
      width: 2rem;
      z-index: auto;
      margin-right: 0.5rem;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 1.1rem;
      letter-spacing: 0.09rem;
      padding: 0.2rem 0;
      position: relative;
      &:before {
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.6rem;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 0.4rem 0.4rem;
        visibility: hidden;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.8rem 1.6rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    background-color: rgb(249, 249, 249);
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
  }
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 60%;
`;

export default Header;
