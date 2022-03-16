import { getSingleCoinPrice } from "api/crypto-api";
import { PocketContext } from "components/client/providers/PocketProvider";
import { Button } from "components/ui/button/button";
import { Input } from "components/ui/input/input";
import { Label } from "components/ui/label/label";
import { Title } from "components/ui/title/title";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ButtonsWrapper,
  FormWrapper,
  InfoWrapper,
  InputsWrapper,
  SelectedCoinWrapper,
  SymbolP,
  Wrapper,
} from "./transaction-details.styles";

const TransactionDetails: React.FC<any> = ({
  selectedCoin: { id, large: img, name, symbol },
  handleCloseModal,
}) => {
  const { handleAddTransactionToStore } = useContext(PocketContext);

  const [price, setPrice] = useState(null);

  const [pricePerCoinValue, setPricePerCoinValue] = useState(null);
  const [quantityValue, setQuantityValue] = useState(null);

  const [transactionTotalValue, setTransactionTotalValue] = useState(0);

  const [currentPrice, setCurrentPrice] = useState<any>(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getCurrentPrice();
  }, []);

  const getCurrentPrice = async () => {
    const { data } = await getSingleCoinPrice(id);
    setPrice(data);
  };

  useEffect(() => {
    if (price === null) return;
    const value = Object.getOwnPropertyDescriptor(price, id)?.value.usd;
    setCurrentPrice(value);
  }, [price]);

  const handleAddTransaction = ({ quantity, pricePerCoin }: any) => {
    handleAddTransactionToStore(
      currentPrice,
      id,
      img,
      symbol,
      pricePerCoin,
      quantity,
      name,
      transactionTotalValue
    );
    handleCloseModal();
  };

  useEffect(() => {
    if (pricePerCoinValue === null || quantityValue === null) return;

    const value = pricePerCoinValue * quantityValue;

    setTransactionTotalValue(value);
  }, [pricePerCoinValue, quantityValue]);

  const handlePricePerCoin = (e: any) => {
    setPricePerCoinValue(e.target.value);
  };

  const handleQuantity = (e: any) => {
    setQuantityValue(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Transaction details</Title>
      <ButtonsWrapper>
        <Button>BUY</Button>
        <Button>SELL</Button>
      </ButtonsWrapper>
      <SelectedCoinWrapper>
        <img src={img} alt="coin logo" />
        <Title> {name} </Title>
        <SymbolP> {symbol} </SymbolP>
      </SelectedCoinWrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddTransaction)}>
        <InputsWrapper>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              {...register("quantity", {
                required: true,
              })}
              step="any"
              onChange={(e) => handleQuantity(e)}
              placeholder="0.00"
              name="quantity"
              id="quantity"
              type="number"
            ></Input>
          </div>
          <div>
            <Label htmlFor="pricePerCoin">Price Per Coin</Label>
            <Input
              {...register("pricePerCoin", { required: true })}
              onChange={(e) => handlePricePerCoin(e)}
              placeholder="$"
              step="any"
              name="pricePerCoin"
              id="pricePerCoin"
              type="number"
            ></Input>
          </div>
        </InputsWrapper>
        <InfoWrapper>
          Total spent: <span>{transactionTotalValue} $</span>{" "}
        </InfoWrapper>
        <Button type="submit">ADD</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default TransactionDetails;
