import React from 'react';
import { CardContentWrapper, CardSubscription, CardContent, Icon, Text } from './style';

const CardContentContainer = ({ subscription, contents }) => {
  return (
    <CardContentWrapper>
      <CardSubscription>{subscription}</CardSubscription>
      {contents.map((content, index) => {
        return (
          <CardContent key={index}>
            <Icon src={content.Icon} />
            <Text>
              <Text>{content.Text}</Text>
            </Text>
          </CardContent>
        );
      })}
    </CardContentWrapper>
  );
};

export default CardContentContainer;
