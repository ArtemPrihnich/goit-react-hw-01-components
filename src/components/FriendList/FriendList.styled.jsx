import styled from "@emotion/styled"

export const List = styled.ul`
width: 200px;
margin: 0 auto;
padding: 40px 0;
`;

export const Item = styled.li`
display: flex;
align-items: center;
margin-bottom: 20px;
justify-content: space-evenly;
border: ${props => `1px solid ${props.theme.colors.black}`};
border-radius: 5px;
background-color: ${props => props.theme.colors.lightgray};

:last-child {margin-bottom: 0};
`;

export const Chip = styled.span`
display: inline-block;
width: 15px;
height: 15px;
border: ${props => `1px solid ${props.theme.colors.black}`};
border-radius: 50%;
background-color: ${(props => props.friend.isOnline ? `${props.theme.colors.green}` : `${props.theme.colors.red}`)};
`;

export const Image = styled.img`
padding: 5px 0;
`;

export const Name = styled.p`
display: block;
padding: 5px;
border: ${props => `1px dashed ${props.theme.colors.black}`};
border-radius: 5px;
font-style: italic;
font-weight: 700;
font-size: 20px;
`;