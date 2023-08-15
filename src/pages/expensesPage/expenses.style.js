
import styled from 'styled-components'

const Block = styled.div`
min-height: calc(100vh - 30px);
background: #e4e9f0;
border: 2px solid white;
border-radius: 15px;
padding: 15px;
`


export const ExpensesBlock = styled(Block)`
flex:1;
margin-left: 250px;
display: flex;
flex-direction: column;
overflow-x: hidden;
@media (max-width: 900px) {
    margin-left: 60px;
}
`