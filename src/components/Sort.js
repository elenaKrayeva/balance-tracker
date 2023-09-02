import React from "react";
import { Flex } from "./UI/Flex";
import { Button } from "./Button";
import { Text } from "./UI/Text";

export const Sort = ({
  sortByAlphabUp,
  sortByAphabDown,
  sortByDateUp,
  sortByDateDown,
  sortByAmountUp,
  sortByAmountDown,
}) => {
  return (
    <Flex
      $justify="center"
      $align="center"
      $pt="10px"
      $pb="10px"
    >
      <Text $align="center" $fw="400">
        Сортировать по:
      </Text>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button size="s" onClick={sortByAlphabUp}>
          АЛФАВИТУ ↑
        </Button>
        <Button size="s" onClick={sortByAphabDown}>
          АЛФАВИТУ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button size="s" onClick={sortByDateUp}>
          ДАТЕ ↑
        </Button>
        <Button size="s" onClick={sortByDateDown}>
          ДАТЕ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button size="s" onClick={sortByAmountUp}>
          СТОИМОСТИ ↑
        </Button>
        <Button size="s" onClick={sortByAmountDown}>
          СТОИМОСТИ ↓
        </Button>
      </Flex>
    </Flex>
  );
};
