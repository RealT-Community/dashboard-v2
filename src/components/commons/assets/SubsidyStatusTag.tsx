import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Badge } from '@mantine/core'

import { UserRealtoken } from 'src/store/features/wallets/walletsSelector'

export const SubsidyStatusTag: FC<{ value: UserRealtoken }> = (props) => {
  const { t } = useTranslation('common', { keyPrefix: 'assetCard' })
  const { subsidyStatus, subsidyStatusValue } = props.value

  if (!subsidyStatusValue) {
    return <></>
  }

  switch (subsidyStatus) {
    case 'yes':
      return (
        <Badge size={'xs'} variant={'dot'} color={'blue'}>
          {t('subsidyStatus.full')}
        </Badge>
      )
    case 'partial':
      return (
        <Badge size={'xs'} variant={'filled'} color={'cyan.4'}>
          {t('subsidyStatus.partial')}
        </Badge>
      )
    default:
      return <></>
  }
}
SubsidyStatusTag.displayName = 'SubsidyStatusTag'
