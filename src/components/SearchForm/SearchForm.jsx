import { useState } from "react";
import { Form } from "../../styles/Form/styles";

const SearchForm = ({ handleSubmit, type }) => {
  const [inputSearch, setInputSearch] = useState();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        inputSearch && handleSubmit(inputSearch);
      }}
    >
      <input
        autoComplete="on"
        autoCorrect="off"
        type="text"
        name={`search${type}`}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        placeholder={`Search ${type}`}
      />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </Form>
  );
};

export default SearchForm;
