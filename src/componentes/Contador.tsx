import styled from 'styled-components';

const StyledContador = styled.div`
  min-width: 300px;
  height: 300px;
  font-size: 160px;
  padding: 25px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 8px solid white;
  margin-bottom: 15px;
`;

const Contador = ({ numClics }:any) => {
    return (
        <StyledContador>
            { numClics }
        </StyledContador>
    );
}

export default Contador
