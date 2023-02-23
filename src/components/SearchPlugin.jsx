import React from "react";

function SearchPlugin({ filter }) {
  const onTextChanged = (e) => {
    let text = e.target.value.trim();
    filter(text);
  };

  return <input placeholder="Search" onChange={onTextChanged} />;
}

export default SearchPlugin;
