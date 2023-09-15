import React from "react";
import { Flex } from "./UI/Flex";
import { Button } from "./Button";
import { Text } from "./UI/Text";

export const Sort = ({
  sortByButtonName,
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
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" name='byAlphabetUp' onClick={sortByButtonName}>
          АЛФАВИТУ ↑
        </Button>
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" name='byAlphabetDown' onClick={sortByButtonName}>
          АЛФАВИТУ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" name='byDateUp' onClick={sortByButtonName}>
          ДАТЕ ↑
        </Button>
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" name='byDateDown' onClick={sortByButtonName}>
          ДАТЕ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button $bgim={$bgim} $bgc={$bgc} $color={$color} size="s" name='byAmountUp' onClick={sortByButtonName}>
          СТОИМОСТИ ↑
        </Button>
        <Button  $bgim={$bgim} $bgc={$bgc} $color={$color} size="s"  name='byAmountDown' onClick={sortByButtonName}>
          СТОИМОСТИ ↓
        </Button>
      </Flex>
    </Flex>
  );
};
