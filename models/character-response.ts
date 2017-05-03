export interface CharacterResponse{
    id:number,
    birthday:string,
    name:string,
    gender: Gender
}

enum Gender{
    male, female
}