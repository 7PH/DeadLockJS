import {Request, Response} from "express";
import {APIDescription} from "./deadlockjs/api/description/APIDescription";
import {APIRouteType} from "./deadlockjs/api/description/APIRouteType";
import {DeadLockJS} from "./deadlockjs/DeadLockJS";


const api: APIDescription = {
    appSecret: '1f4600bc0380273f90ed02db217cfbf',
    workers: 2,
    port: 3000,
    ipBlacklist: [],
    rateLimit: {
        ipWhitelist: [],
        weight: 1,
        maxPending: 0,
        maxWeightPerSec: 1
    },
    db: {
        mongodb: {
            url: "mongodb://localhost:27017"
        }
    },
    cache: {
        expire: 2000
    },
    root: {
        kind: APIRouteType.DIRECTORY,
        path: '/api/v1',
        routes: [
            {
                kind: APIRouteType.END_POINT,
                path: '/',
                method: 'get',
                dbConnection: true,
                handler: async (req: Request, res: Response) => {
                    throw new Error("issou");
                }
            }
        ]
    }
};


DeadLockJS.startApp(api);