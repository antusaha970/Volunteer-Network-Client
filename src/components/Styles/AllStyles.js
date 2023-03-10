import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const HomeBox = styled(Box)`
    background: #F8FAFC;
    width: 100%;
`;

export const LogoImg = styled('img')`
    width: 202.81px;
    height: 60px;
`;

export const MenuStack = styled(Stack)`

`;

export const MenuLink = styled(Typography)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding-right: 25px;
    padding-top: 5px;
`;

export const ResponsiveLink = styled(MenuLink)`
    padding: 10px 10px;
    color: #000;
`;

export const CustomTypography = styled(Typography)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    padding: 25px 0;
    ${props => props.theme.breakpoints.up("lg")} {
        font-size: 36px;
    }
    ${props => props.theme.breakpoints.up("xs")} {
        font-size: 25px;
    }
`;

export const CustomSearch = styled('input')`
    height: 48px;
    background: #FBFBFB;
    border: 1px solid #D6D6D6;
    border-radius: 8px;
    outline: none;
    font-size: 20px;
    ${props => props.theme.breakpoints.up("xs")} {
        width: 100%;
    }
    ${props => props.theme.breakpoints.up("lg")} {
        width: 470px;
    }
    ${props => props.theme.breakpoints.up("md")} {
        width: 470px;
    }
    ${props => props.theme.breakpoints.up("sm")} {
        width: 470px;
    }
    padding: 15px;
    box-sizing: border-box;
`;

export const CustomButton = styled(Button)`
    
    width: 118px;
    height: 50px;
    background: #3F90FC;
    border-radius: 0px 8px 8px 0px;
    margin-left: -15px;
    box-shadow: none;
`;

export const CustomImage = styled('img')`
    width: 100%;
    height: 320px;
    margin-bottom: -8px;
`;

export const CustomTypoForTask = styled(Typography)`
    color: #fff;
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    border-radius: 0 0 10px 10px;
    padding: 15px 0;
`;