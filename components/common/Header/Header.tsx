import { useState } from "react";
import { Logo } from "@components/common";
import { Input } from "@components/common/";

import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import styles from "./Header.module.css";

import Link from "next/link";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <header className={styles.pagination}>
      <div className={styles.header}>
        <AiOutlineMenu className={styles.hamburgerMenu} size={24} />
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
        <form className={styles.searchDesktop}>
          <Input
            name="search"
            label="search"
            value={search}
            placeholder="O que está procurando?"
            search
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <nav>
          <div>
            <AiOutlineUser size={24} />
            <span>Minha conta</span>
          </div>
          <AiOutlineShoppingCart className={styles.cartIcon} size={24} />
        </nav>
      </div>
      <form className={styles.searchMobile}>
        <Input
          name="search"
          label="search"
          value={search}
          placeholder="O que está procurando?"
          search
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

export default Header;
