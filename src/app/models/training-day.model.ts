export class TrainingDay{
    public id: number;
    public date: {year: number, month: number, day: number};
    public plan: string;
    public description: string;
    
    constructor(id: number, date: string, planId: any, description: string){
        this.id = id;
        this.date = this.convertDate(date);
        this.plan = planId;
        this.description = description;
    };

    private convertDate(date: string){
        var dateArray = date.split(".")
        return {
            year: parseInt(dateArray[2]), 
            month: parseInt(dateArray[1]), 
            day: parseInt(dateArray[0]),
        };
    }
}