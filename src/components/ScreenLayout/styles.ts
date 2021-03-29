import styled from 'styled-components/native'

export const InnerWrapper = styled.ScrollView`
  padding: 0 20px;
  background-color: ${props => props.theme.colors.ultraWhite};
`

export const LayoutHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
`
