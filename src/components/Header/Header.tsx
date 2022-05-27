import { Link, useLocation } from "react-router-dom"
import { BsChevronCompactLeft } from 'react-icons/bs';
import './Header.css';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      {pathname !== '/' &&
      <button type="button" className="prev-page" onClick={() => window.history.back()}>
       <BsChevronCompactLeft /> Go back
      </button>}
      <h1 className="title">Companies</h1>
    </header>
  )
}
