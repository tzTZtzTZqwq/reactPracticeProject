export enum blockStatusEnum {
    NONE = 0, 
    PENDING = 1, 
    ACCEPTED = 2,
    WRONGANSWER = 3,
    TIMELIMIT = 4, 
    MEMORYLIMIT = 5, 
    UNKNOWN = 6
}

export type blockStatus = {
    index: string,
    time: string,
    status: keyof typeof blockStatusEnum
}

export const blockColorArr = ["#000000","#FFA500","#008000","#FF0000","#FFFF00","#0000FF","#808080"];
ex
