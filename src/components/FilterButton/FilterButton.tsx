import React from "react";

function FilterButton({ children, onClick }: any) {
  return <button onClick={onClick}>{children}</button>;
}

export default FilterButton;
