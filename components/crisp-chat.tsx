"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("dadc221f-e9dd-44ed-887f-021487fa0563")
    }, [])

    return null
}
