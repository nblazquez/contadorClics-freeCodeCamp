import styled from 'styled-components';

const StyledBoton = styled.button<{esBotonDeClic:boolean}>`
  width: 250px;
  height: 80px;
  font-family: Roboto, sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: white;
  border: 2px solid white;
  border-radius: 15px;
  margin: 5px;
  cursor: pointer;
  background-color: ${props => props.esBotonDeClic ? '#002ead' : '#5a01a7'};

  :hover{
    background-color: #00471b;
  }
`;

const Boton = ({ texto, esBotonDeClic, manejarClic }:any) => {
    return (
      <StyledBoton
        esBotonDeClic={ esBotonDeClic }
        onClick={ manejarClic }>
        {texto}
      </StyledBoton>
    );
}

export default Boton
