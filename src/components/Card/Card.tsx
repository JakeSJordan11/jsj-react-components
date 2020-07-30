import React from "react";
import CardBaseStyled from "./styled components/CardBaseStyled";
import CardImageStyled from "./styled components/CardImageStyled";

const Card = () => {
  return (
    <>
      <CardImageStyled />
      <CardBaseStyled>default card</CardBaseStyled>
    </>
  );
};

export default Card;
