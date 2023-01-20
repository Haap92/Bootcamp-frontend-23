type userRol = 'Admin' | 'User'

type trainer = {
    name: string
    age: number
    rol: userRol
}

type pokemon = {
    id: number
    name: string
    height: number
    weight: number
    base_experience?: number
    types: Array<number|object>
    moves: Array<object>
    sprites: Object
}