import React from "react";
import { Flex } from "./UI/Flex";
import { Button } from "./Button";
import { Text } from "./UI/Text";

export const Sort = ({
  sortByButtonName,
  activeSortBtn,
  $bgim,
  $bgc,
  $color,
}) => {

  const isActiveBtn = (btnName) => {
    if (btnName === activeSortBtn) {
      return {
        backgroundColor: "#fff",
        color: "#000"
      }
    }
  }

  return (
    <Flex $justify="center" $align="center" $pt="10px" $pb="10px">
      <Text $align="center" $fw="400">
        Сортировать по:
      </Text>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button
          $bgim={$bgim}
          $bgc={$bgc}
          $color={$color}
          size="s"
          name="byAlphabetUp"
          onClick={sortByButtonName}
          style={isActiveBtn("byAlphabetUp")}
        >
          АЛФАВИТУ ↑
        </Button>
        <Button
          $bgim={$bgim}
          $bgc={$bgc}
          $color={$color}
          size="s"
          name="byAlphabetDown"
          onClick={sortByButtonName}
          style={isActiveBtn("byAlphabetDown")}
        >
          АЛФАВИТУ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button
          $bgim={$bgim}
          $bgc={$bgc}
          $color={$color}
          size="s"
          name="byDateUp"
          onClick={sortByButtonName}
          style={isActiveBtn("byDateUp")}
        >
          ДАТЕ ↑
        </Button>
        <Button
          $bgim={$bgim}
          $bgc={$bgc}
          $color={$color}
          size="s"
          name="byDateDown"
          onClick={sortByButtonName}
          style={isActiveBtn("byDateDown")}
        >
          ДАТЕ ↓
        </Button>
      </Flex>
      <Flex $shadow="none" $mb="0" $justify="center">
        <Button
          $bgim={$bgim}
          $bgc={$bgc}
          $color={$color}
          size="s"
          name="byAmountUp"
          onClick={sortByButtonName}
          style={isActiveBtn("byAmountUp")}
        >
          СТОИМОСТИ ↑
        </Button>
        <Button
          $bgim={$bgim}
          $bgc={$bgc}
          $color={$color}
          size="s"
          name="byAmountDown"
          onClick={sortByButtonName}
          style={isActiveBtn("byAmountDown")}
        >
          СТОИМОСТИ ↓
        </Button>
      </Flex>
    </Flex>
  );
};
