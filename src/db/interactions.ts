import { interaction, visit } from "@prisma/client";
import { prismaClient } from "./prisma"

export const InsertUserInteraction = async (type: string, target: string) => {
    await prismaClient.interaction.create({
        data: {
            type, 
            target
        }
    })
}

export const GetUserInteractionsCount = async (type: string, target?: string) => {
    return prismaClient.interaction.count({
        where: {
            type: {
                equals: type
            },
            ...target ? {
                AND: {
                    target: {
                        equals: target
                    }
                }
            } : {}
        }
    })
}