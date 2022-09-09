import styled from '@emotion/styled';

export const Container = styled.div`
display: block;
width: 200px;
border: ${props => `1px dashed ${props.theme.colors.black}`};
border-radius: 5px;
margin: 0 auto;
padding: 10px 0;
`;

export const Description = styled.div`
margin: 0;
`;

export const Image = styled.img`
display: block;
width: 200px;
margin: 0 auto;
`;

export const Name = styled.p`
text-align: center;
margin-top: 10px;
`;

export const Tag = styled.p`
text-align: center;
margin-top: 10px;
`;

export const Location = styled.p`
text-align: center;
margin-top: 10px;
`;

export const List = styled.ul`
margin-top: 15px;
display: flex;
justify-content: center;
background-color: ${props => props.theme.colors.lightgray};
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
text-align: center;
margin-right: 10px;
 :last-child{margin-right: 0};
`;

export const Label = styled.span`

`;

export const Quantity = styled.span`

`;