import styled from "@emotion/styled";
import RandomHexColor from '../../utils/RandomHexColor'

export const Section = styled.section`
padding: 40px 0;
`;

export const Title = styled.h2`
text-align: center;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
margin-top: 15px;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
text-align: center;
margin-right: 10px;
padding: 5px;
 :last-child{margin-right: 0};
border: ${props => `1px solid ${props.theme.colors.black}`};
border-radius: 3px;
background-color: ${RandomHexColor};
`;

export const Lable = styled.span`

`;

export const Percentage = styled.span`
margin-top: 5px;
`;