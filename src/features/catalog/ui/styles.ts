import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  padding: 2rem;
`;

export const BikeListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BikeCardWrapper = styled.li`
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.secondText};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const BikeImg = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 3;
  object-fit: cover;
`;

export const BikeInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BikeName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.palette.text};
`;

export const BikePrice = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text};
  margin: 0.1rem 0;
`;

export const BikeDetails = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.secondText};
  margin: 0.5rem 0;
`;
