export class InvalidTokenError extends Error {}
export interface JwtDecodeOptions {
    header?: boolean;
}
// @ts-ignore
export default function jwtDecode<T = unknown>(
    token: string,
    options?: JwtDecodeOptions
): T;