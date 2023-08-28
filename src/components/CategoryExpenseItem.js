import styled from 'styled-components';
import { Flex } from './UI/Flex';
import { Button } from './Button';
import { useDispatch } from 'react-redux';
import {removeExpenseCategory} from '../store/expensesCategoriesSlice';

const Wrapper = styled.div`
font-weight: 500;
font-size: 16px;
`;


export const CategoryExpenseItem = ({children, id}) => {
  const dispatch = useDispatch();
  return (
    <Flex $justify='space-between' $align='center' $pl='5px' $pr='5px'>
        <Wrapper>{children}</Wrapper>
        <Button size='s' onClick={()=> dispatch(removeExpenseCategory({id}))}>Удалить</Button>
    </Flex>
  )
}
