import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Badge } from '@mantine/core'

import { selectUserRentCalculation } from 'src/store/features/settings/settingsSelector'
import { RentCalculation } from 'src/types/RentCalculation'

export const RealtimeIndicator: FC = () => {
  const { t } = useTranslation('common', {
    keyPrefix: 'realtimeIndicator',
  })
  const rentCalculation = useSelector(selectUserRentCalculation)

  if (rentCalculation !== RentCalculation.Realtime) return null;

  return (
    <div>
      <Badge key='realtime' leftSection='⏰'>
        {t('realtime')}
      </Badge>
    </div>
  )
}
