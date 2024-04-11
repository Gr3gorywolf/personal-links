import { RedirectLinks } from '@/data/redirectLinks';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
    const foundRedirect = RedirectLinks.find((redirect)=>request.url.includes(redirect.url));
    if(foundRedirect){
      return NextResponse.redirect(new URL('', foundRedirect.to))
    }
    return NextResponse.next();
}
