import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  height: 102px;
`

export const Profile = styled.View`
  position: relative;
`

export const OnlineBadge = styled.View`
  width: 16px;
  height: 16px;
  border-width: 3px;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.success};
  border-color: ${props => props.theme.colors.ultraWhite};
`

export const Info = styled.View`
  margin-left: 24px;
  display: flex;
  height: 100%;
  flex: 1;
`

export const UserName = styled.Text`
  font-size: 18px; 
  margin-bottom: 8px;
  font-family: ${props => props.theme.fonts.mainMedium};
`

export const LastMessage = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.fonts.mainRegular};
`

export const Status = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 12px;
  height: 100%;
`

export const LastSeen = styled.Text`
  font-size: 12px;
  margin-bottom: 16px;
  margin-top: 6px;
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.fonts.mainMedium};
`

export const MessagesCount = styled.Text`
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 26px;
  padding: 3px 10px 0;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.mainSemiBold};
  background-color: ${props => props.theme.colors.primary};
`

