declare module "emoji-flags" {
  export function countryCode(countryCode: string): string;
  export function data(): Array<{
    code: string;
    emoji: string;
    unicode: string;
    name: string;
    title: string;
    dialCode: string;
  }>;
}
