﻿import { KahlaUser } from './KahlaUser';

export class Request {
    public id: number;
    public creatorId: string;
    public creator: KahlaUser;
    public targetId: string;
    public target: KahlaUser;
    public createTime: Date;
    public completed: boolean;
}
