import { styled } from "styled-components";

export const DivNavbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`

export const DivNavbarLinks = styled(DivNavbar)`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    transition: 0.2s ease-in-out;
    font-family: Didot;
    font-size: 25px;
  }
  p:hover {
    transform: translate(5px, 0);

  }
`

export const DivNavbarLogo = styled(DivNavbar)`
  justify-content: flex-end;
  img:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }
`

export const DivNavbarSign = styled(DivNavbar)`
`

export const Navlink = styled.a`
  margin-left: 1.5rem;
`


export const HeaderLogo = styled.img`
  height: 125px;
  margin-left: 1rem;
`

export const Icon = styled.a`
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
  margin-right: 1.5rem;

  img {
    height: 3rem;
    width: 3rem;
  }
`