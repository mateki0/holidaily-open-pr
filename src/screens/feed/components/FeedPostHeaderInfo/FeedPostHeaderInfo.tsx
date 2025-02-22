import React from 'react'

import { Box, Text } from 'utils/theme'
import { FeedPost } from 'mock-api/models/miragePostTypes'
import { getReversedDateWithShortMonthString } from 'utils/dates'

export const FeedPostHeaderInfo = ({ post }: { post: FeedPost }) => {
  const formattedDate = post.createdAt
    ? getReversedDateWithShortMonthString(new Date(post.createdAt))
    : ''

  return (
    <Box flexGrow={1} paddingHorizontal="xs" flex={1} justifyContent="space-evenly">
      <Text variant="textBoldSM" color="blackBrighterDouble">
        {post?.author?.name}
      </Text>
      <Text variant="textXS" color="darkGrey">
        {post?.author?.occupation}
      </Text>
      <Box position="absolute" right={0}>
        <Text variant="textXS" color="darkGrey">
          {formattedDate}
        </Text>
      </Box>
    </Box>
  )
}
