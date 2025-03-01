import { jwtDecode, JwtPayload } from "jwt-decode";

export function getJwtToken(): string {
    return JSON.parse( localStorage.getItem('token') )
}
export function isLogedIn(): boolean {
    const token = getJwtToken()
    if (token && token.toString().length > 0) {
        try {
            const decoded = jwtDecode<JwtPayload>(token);
            return true
        } catch {
            console.log(`Invalid jwt token: ${token}`)
            return false
        }
    }
    return false
    
}
export function setJwtToken(token: string) {
    localStorage.setItem( 'token', JSON.stringify(token) );
}
export function clearJwtToken() {
    localStorage.removeItem('token')
}
