import styled from 'styled-components';
import { MdChevronRight, MdAccessTime } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

export const Tempo = styled(MdAccessTime)`
    width: 20px;
    height: 20px;
    color: #FFFFFF;
    margin-right: 10px;
`;

export const ArrowRight = styled(MdChevronRight)`
    width: 40px;
    height: 40px;
    color: #000000;
    border: 0;
    border-radius: 15px;
    background-color: #DDDDDD;
    margin-left: 10px;
    cursor: pointer;
`;

export const ArrowInferior = styled(IoIosArrowDown)`
    width: 20px;
    height: 20px;
    color: #FFFFFF;
    margin-left: 10px;
`;