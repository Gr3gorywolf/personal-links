import { GetUserInteractionsCount, InsertUserInteraction } from '@/db/interactions'
import { prismaClient } from '@/db/prisma';
import { GetUniqueVisits } from '@/db/visits'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const visits = await GetUniqueVisits();
    var interactions = await GetUserInteractionsCount("click");
    res.status(200).json({ stats:{
        uniqueVisits:visits,
        clicks:interactions
    } })
}