export enum blockStatusEnum {
    NONE = 0, 
    PENDING = 1, 
    ACCEPTED = 2,
    WRONGANSWER = 3,
    TIMELIMIT = 4, 
    MEMORYLIMIT = 5, 
    RUNTIMEERROR = 6,
    UNKNOWN = 7
}

export type blockStatus = {
    index: number
    time: string,
    status: keyof typeof blockStatusEnum
}

export const blockColorArr = ["#000000","#FFA500","#008000","#FF0000","#FFFF00","#0000FF","#0000FF","#808080"];
export const blockStatusArr = ["NO","PD","AC","WA","TL","ML","RE","UN"];
export const blockDescription = ["未知","等待中","通过","答案错误,程序输出与预期不符","超时","内存超限","运行时出错(如访问数组的第-1项)","未知错误"];
