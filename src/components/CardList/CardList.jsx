import Avatar from "../common/Avatar/Avatar";
import EmojiBadge from "../common/EmojiBadge/EmojiBadge";
import { CARD_BACKGROUND_COLORS } from "../../constants/backgroundColors";
import * as S from "./CardListStyle";

const CardList = ({
  recipientName,
  backgroundColor,
  backgroundImageUrl,
  avatarImageUrls = [],
  messageCount = 0, // 전체 메시지 수
  reactions = [], // 이모지 배열
  onClick,
}) => {
  const firstAvatars = avatarImageUrls.slice(0, 3);
  const extraCount = messageCount > 3 ? messageCount - 3 : 0;
  const showExtraCount = extraCount > 0;

  const themeColor =
    CARD_BACKGROUND_COLORS[backgroundColor] || CARD_BACKGROUND_COLORS.beige;

  return (
    <S.CardContainer
      $backgroundColor={themeColor}
      $backgroundImageUrl={backgroundImageUrl}
      onClick={onClick}
    >
      <S.CardContent>
        <S.Header>
          <S.RecipientText $backgroundImageUrl={backgroundImageUrl}>
            To. {recipientName}
          </S.RecipientText>
        </S.Header>

        <S.Body>
          <S.AvatarGroup>
            {firstAvatars.map((url, index) => (
              <S.AvatarItem key={`${url}-${index}`}>
                <Avatar src={url} size="xsmall" />
              </S.AvatarItem>
            ))}
            {showExtraCount && <S.ExtraCount>+{extraCount}</S.ExtraCount>}
          </S.AvatarGroup>

          <S.MessageText $backgroundImageUrl={backgroundImageUrl}>
            {messageCount > 0 ? (
              <>
                <span className="count-bold">{messageCount}</span>명이
                작성했어요!
              </>
            ) : (
              "아직 작성된 메시지가 없어요."
            )}
          </S.MessageText>
        </S.Body>

        <S.Divider $backgroundImageUrl={backgroundImageUrl} />

        <S.Footer>
          {reactions.map((reaction) => (
            <EmojiBadge
              key={reaction.id}
              emoji={reaction.emoji}
              number={reaction.count}
            />
          ))}
        </S.Footer>
      </S.CardContent>
    </S.CardContainer>
  );
};

export default CardList;
