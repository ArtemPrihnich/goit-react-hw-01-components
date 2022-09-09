import styled from "@emotion/styled";
import backgroundColorPicker from "utils/BackgroundColorPicker";

export const Table = styled.table`
border-collapse: collapse;
width: 600px;
margin: 40px auto;
`;

export const TableHead = styled.thead`

`;

export const TableHeadRow = styled.tr`
border: ${props => `2px solid ${props.theme.colors.lightgray}`};
background-color: ${props => props.theme.colors.darkgreen};
`;

export const TableHeader = styled.th`
border: ${props => `2px solid ${props.theme.colors.lightgray}`};
padding: 10px;
`;

export const TableBody = styled.tbody`

`;

export const TableBodyRow = styled.tr`
border: ${props => `2px solid ${props.theme.colors.lightgray}`};
background-color: ${backgroundColorPicker};
`;

export const TableBodyData = styled.td`
border: ${props => `2px solid ${props.theme.colors.lightgray}`};
text-align: center;
padding: 10px;
`;
