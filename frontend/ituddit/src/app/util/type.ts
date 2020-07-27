export enum Type {
    IMG = 'img',
    VIDEO = 'video',
    TEXT = 'text',
    URL = 'url',
}

export interface Post {
    id: number;
    group: string;
    auther: string;
    logo: string;
    timestamp: number;
    type: Type;
    title: string;
    content: string;
    comments: Comment[];
    rate: number;
}

export interface Comment {
    id: number;
    auther: string;
    timestamp: number;
    isReplayTo: Comment|undefined;
    content: string;
    rate:number;
}