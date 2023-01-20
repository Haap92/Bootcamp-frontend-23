type UserRol = 'Admin' | 'User'

type Trainer = {
    name: string
    age: number
    rol: UserRol
}

type Pokemon = {
    id: number
    name: string
    height: number
    weight: number
    base_experience?: number
    types: Array<number|object>
    moves: Array<object>
    sprites: Object
}