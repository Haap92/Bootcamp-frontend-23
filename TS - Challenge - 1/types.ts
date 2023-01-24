export type UserRol = 'Admin' | 'User'

export type Type = {
    slot: number
    type: TypeDetail
}

export type TypeDetail = {
    name: string
    url: string
}

export type Move = {
    move: MoveDetail
}

export type MoveDetail = {
    name: string
    url: string
}
  
export type Sprites = {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}
  

export interface Trainer{
    name: string
    age: number
    rol: UserRol
}

export interface Pokemon {
    id: number
    name: string
    height: number
    weight: number
    base_experience?: number
    types: Type[]
    moves: Move[]
    sprites: Sprites
}