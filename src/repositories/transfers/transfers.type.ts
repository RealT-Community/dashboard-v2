export enum TransferOrigin {
  primary = 'primary',
  reinvest = 'reinvest',
  swapcat = 'swapcat',
  yam = 'yam',
  rmm = 'rmm',
  levinSwap = 'levinSwap',
  levinSwapPool = 'levinSwapPool',
  levinSwapUnknown = 'levinSwapUnknown',
  other = 'other',
}

export enum UserTransferDirection {
  in = 'in',
  out = 'out',
  internal = 'internal',
}

export interface UserRealTokenTransfer {
  id: string
  realtoken: string
  timestamp: number
  amount: number
  direction: UserTransferDirection
  origin: TransferOrigin
  price: number
  exchangedPrice?: number
  isPartial?: boolean // Error when fetching all data related to this tx
}

export interface RealTokenTransfer {
  id: string
  realtoken: string
  from: string
  to: string
  timestamp: number
  amount: number
  origin: TransferOrigin
  exchangedPrice?: number // Real exchanged price on secondary markets
  isPartial?: boolean // Error when fetching all data related to this tx
}