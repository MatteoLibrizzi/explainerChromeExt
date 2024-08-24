import { NextResponse } from "next/server"

export async function POST(request: Request) {
    console.log("Request", request)


    const response = NextResponse.json({ hello: "World!" })

    console.log("Response", response)
    return response
}
