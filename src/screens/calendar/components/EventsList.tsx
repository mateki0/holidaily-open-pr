import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { DayInfo } from 'screens/calendar/components/DayInfo'
import { TouchableOpacity } from 'react-native'
import { Box, Text } from 'utils/theme'
import { useLanguage } from 'hooks/useLanguage'
import { TFunction, useTranslation } from 'react-i18next'
import { DayInfoProps } from 'types/DayInfoProps'
import { FlashList } from '@shopify/flash-list'

export type EventsListProps = {
  selectedDate: Date
  days: DayInfoProps[]
  switchCalendarHeight: boolean
  setSwitchCalendarHeight: F1<boolean>
}

export const Item = React.memo(({ item }: { item: DayInfoProps }) => (
  <TouchableOpacity activeOpacity={1}>
    <DayInfo date={item.date} events={item.events} weekend={item.weekend} />
  </TouchableOpacity>
))

const ListFooterComponent = (t: TFunction<'calendar'>) => (
  <Box marginTop="s" alignItems="center">
    <Text variant="textXSGrey">{t('endOfEventsList')}</Text>
  </Box>
)

export const EventsList = forwardRef<FlashList<DayInfoProps>, EventsListProps>(
  ({ days, switchCalendarHeight, setSwitchCalendarHeight, selectedDate }, flatListRef) => {
    const [pickedDate, setPickedDate] = useState(new Date())
    const [showNavButton, setShowNavButton] = useState(false)
    const [language] = useLanguage()

    const { t } = useTranslation('calendar')

    const renderItem = useCallback(({ item }) => <Item key={item.date} item={item} />, [])

    const handleTouch = () => {
      if (switchCalendarHeight) setSwitchCalendarHeight(false)
    }

    const handleScroll = () => {
      handleTouch()
    }

    useEffect(() => {
      if (selectedDate !== pickedDate) setPickedDate(selectedDate)
      if (showNavButton) setShowNavButton(false)
      // Comment: we don't want to track picked date and showNavButton
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate])

    return (
      <Box marginTop="xxs" marginHorizontal="s" justifyContent="center" flex={1}>
        <FlashList
          ListFooterComponent={ListFooterComponent(t)}
          estimatedItemSize={56}
          data={days}
          renderItem={renderItem}
          extraData={[days, language]}
          keyExtractor={(item) => item.date}
          ref={flatListRef}
          onTouchEnd={handleTouch}
          onMomentumScrollEnd={handleScroll}
          contentContainerStyle={{ paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled"
        />
      </Box>
    )
  }
)
EventsList.displayName = 'EventsList'
