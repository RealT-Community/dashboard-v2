import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Button, Indicator } from '@mantine/core'

import { selectUserRentCalculation } from 'src/store/features/settings/settingsSelector'
import { RentCalculation } from 'src/types/RentCalculation'

export const RealtimeIndicator: FC = () => {
  const { t } = useTranslation('common', {
    keyPrefix: 'realtimeIndicator',
  })
  const rentCalculation = useSelector(selectUserRentCalculation)

  return (
    <div>
      <Indicator
        inline={true}
        color={'red'}
        disabled={rentCalculation !== RentCalculation.Realtime}
      >
        <Button variant={'subtle'} compact={true}>
          {t('realtime')}
        </Button>
      </Indicator>
    </div>
  )
}
