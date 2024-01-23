import { NextRequest, NextResponse } from "next/server";


export async function GET (request:NextRequest){

    const response = NextResponse.json(
        {
            message: "User signed out Successfully :))"
        },
        { status: 200 }
      )


    response.cookies.set({
        name: "token",
        value: '',
        maxAge: 0,
        path:"/"
      });


        return response
}