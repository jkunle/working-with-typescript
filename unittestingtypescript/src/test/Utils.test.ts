import { Utils } from '../app/Utils'

describe('Utils test suite', () =>{
  it('should return uppercase of a valid string', () => {
    const sut = Utils.toUpperCase;
    const expected = "ABC";

    const actual = sut("abc");

    expect(actual).toBe(expected);
  });

  describe("getStringInfo for arg My-String should", () => {
    it("returns right length", ()=> {
      const actual = Utils.getStringInfo("My-String");

      expect(actual.characters).toHaveLength(9);
    });
    it("returns right lowercase", ()=> {
      const actual = Utils.getStringInfo("My-String");

      expect(actual.lowerCase).toBe("my-string");
    });
    it("returns right uppercase", ()=> {
      const actual = Utils.getStringInfo("My-String");

      expect(actual.upperCase).toBe("MY-STRING");
    });
    it("returns right uppercase", ()=> {
      const actual = Utils.getStringInfo("My-String");

      expect(actual.upperCase).toBe("MY-STRING");
    });
    it("returns right characters", ()=> {
      const actual = Utils.getStringInfo("My-String");

      expect(actual.characters.length).toBe(9);
    
      expect(actual.characters).toEqual(["M","y","-","S","t","r","i","n","g"])
      expect(actual.characters).toContain<String>("M");
      expect(actual.characters).toEqual(expect.arrayContaining(["S","t","r","i","n","g","M","y","-"]));
    });
    it("returns right extra info", ()=> {
      const actual = Utils.getStringInfo("My-String");

      expect(actual.extraInfo).toEqual({});
  
  
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });
  });

  describe.only("ToUpperCase examples", () => {
    it.each([
      {input: "abc", expected: "ABC"},
      {input: "My-String", expected: "MY-STRING"},
      {input: "def", expected: "DEF"}
    ])("$input toUpperCase should be $expected", ({input, expected})=> {
      const actual = Utils.toUpperCase(input);

      expect(actual).toBe(expected);
    })
  })
});