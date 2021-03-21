import styled from 'styled-components/native'

export const DividerWrap = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const DividerLine = styled.View`
  flex: 1;
  margin-top: 3px;
  height: 1px;
  background-color: ${props => props.theme.colors.grey};
`

export const DividerText = styled.Text`
  font-size: 13px;
  padding: 0 20px;
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.fonts.mainBold};
`
