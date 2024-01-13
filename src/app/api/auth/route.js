import {NextResponse} from 'next/server'
export async function GET(req, res, next) {
  return NextResponse.json({
    msg:'hello from api server', success:true,
  })
}