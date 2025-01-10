export enum blockStatusEnum {
    NONE = "#000000", 
    PENDING = "#FFA500", 
    ACCEPTED = "#008000",
    WRONGANSWER = "#FF0000",
    TIMELIMIT = "#FFFF00", 
    MEMORYLIMIT = "#0000FF", 
    UNKNOWN = "#808080"
}
        
export type blockStatus = {
    index: string,
    status: keyof typeof blockStatusEnum
}


