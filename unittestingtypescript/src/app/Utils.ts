export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  characters: Array<string>,
  length: number,
  extraInfo: Object | undefined
}
export class Utils {
  public static toUpperCase(arg: string) {
    return arg.toUpperCase();
  }
  public static getStringInfo(arg: string) : stringInfo {
    return {
      lowerCase: arg.toLowerCase(),
      upperCase: arg.toUpperCase(),
      characters: Array.from(arg),
      length: arg.length,
      extraInfo: {}
    }
  }
}