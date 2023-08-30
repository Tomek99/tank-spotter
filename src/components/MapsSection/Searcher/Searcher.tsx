import React from "react";
import styles from "./Searcher.module.scss";
import { CiSearch } from "react-icons/ci";

interface filterBySearchInterface {
  filterBySearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Searcher({ filterBySearch }: filterBySearchInterface) {
  return (
    <div className={styles.Searcher}>
      <input
        type="text"
        className={styles.inputSearcher}
        onChange={filterBySearch}
      />
      <CiSearch size={35} />
    </div>
  );
}

export default Searcher;
