import React from "react";
import { Flex } from "./UI/Flex";
import { Button } from "./Button";
import { Text } from "./UI/Text";

export const Sort = ({
  sortByAlphabUp,
  sortByAlphabDown,
  sortByDateUp,
  sortByDateDown,
  sortByAmountUp,
  sortByAmountDown,
  $bgim,
  $bgc,
  $color
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
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" onClick={sortByAlphabUp}>
          АЛФАВИТУ ↑
        </Button>
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" onClick={sortByAlphabDown}>
          АЛФАВИТУ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" onClick={sortByDateUp}>
          ДАТЕ ↑
        </Button>
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" onClick={sortByDateDown}>
          ДАТЕ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" onClick={sortByAmountUp}>
          СТОИМОСТИ ↑
        </Button>
        <Button  $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" onClick={sortByAmountDown}>
          СТОИМОСТИ ↓
        </Button>
      </Flex>
    </Flex>
  );
};
