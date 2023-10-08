
interface Inft {
    identifier: string
    collection: string
    contract: string
    token_standard: string
    name: string
    description: string
    image_url: string
    metadata_url: string
    created_at: string
    updated_at: string
    is_disabled: boolean
    is_nsfw: boolean
}

 interface Infts {
    nfts?: Inft[] |undefined
    next?: string
}
export interface Istate {
    isLoading: boolean
    error: {}
    dataNFTs?: Infts
    stats: any
    next: string
    profile: any
}
export interface CardProps {
    identifier: string
    img: string
    name: string
    symbol: string
    price: number
    link: string
  }
  