export class Tutoriel{
    constructor(
        public Id: number,
        public title: string,
        public description: string,
        public published: boolean,
        public createdAt?: Date,
        public updatedAt?: Date
    ){}

    
}