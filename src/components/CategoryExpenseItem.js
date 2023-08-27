import styled from 'styled-components';
import { Flex } from './UI/Flex';
import { Button } from './Button';

const Wrapper = styled.div`
font-weight: 500;
font-size: 16px;
`;


export const CategoryExpenseItem = ({children, removeExpense, id}) => {
  return (
    <Flex $justify='space-between' $align='center' $pl='5px' $pr='5px'>
        <Wrapper>{children}</Wrapper>
        <Button size='s' onClick={()=> removeExpense(id)}>Удалить</Button>
    </Flex>
  )
}
