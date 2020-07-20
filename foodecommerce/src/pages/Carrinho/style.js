import styled from 'styled-components';
import { FaRegCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdClear, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

export const Cartao = styled(FaRegCreditCard)`
    width: 40px;
    height: 30px;
    color: #009ACD;
`;

export const Dinheiro = styled(FaRegMoneyBillAlt)`
    width: 40px;
    height: 30px;
    color: #228B22;
`;

export const Remover = styled(MdClear)`
    width: 50px;
    height: 50px;
    color: #EE0000;
    margin-left: 80px;
    cursor: pointer;
`;

export const AddItem = styled(MdAddCircle)`
    width: 25px;
    height: 25px;
    color: #191919;
    cursor: pointer;
`;

export const RemoveItem = styled(MdRemoveCircle)`
    width: 25px;
    height: 25px;
    color: #191919;
    cursor: pointer;
`;