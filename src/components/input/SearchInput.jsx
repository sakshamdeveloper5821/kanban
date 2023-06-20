
import { searchInputIcon } from "../../constant";
import "./style.scss";

export const SearchInput = ({ name }) => {
  return (
    <div className="shearchInput">
      <img src={searchInputIcon} alt="search" />
      <input className="search" type="search" name={name} placeholder={"Search for anything..."} />
    </div>
  );
};
