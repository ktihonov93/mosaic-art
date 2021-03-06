import React from "react";

function SearchPlugin({ filter }) {
  const onTextChanged = (e) => {
    let text = e.target.value.trim(); // удаляем пробелы
    filter(text); // передаем введенный текст в родительский компонент
  };

  return <input placeholder="Search" onChange={onTextChanged} />;
}

export default SearchPlugin;
