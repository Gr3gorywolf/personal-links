import { interaction, visit } from "@prisma/client";
import { prismaClient } from "./prisma"

export const InsertVisit = async (identifier:string, from:string) => {
    await prismaClient.visit.create({
        data: {
             from,
             identifier
        }
    })
}

export const GetUniqueVisits = async () => {
    var uniqueVisits =  await prismaClient.visit.findMany({
        distinct:['identifier'],
        select:{
            id:true
        }
    });
    return uniqueVisits.length;
}