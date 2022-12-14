{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array ...
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // π©
  let age: number | undefined; //* λ°μ΄ν° νμμ΄ μκ±°λ μμ§ κ²°μ λμ§ μμμ λ μ¬μ© (nullλ³΄λ€ λ³΄νΈμ μΌλ‘ μ¬μ©λ¨)
  age = undefined;
  age = 28;

  function find(): number | undefined {
    if (age) {
      return 28;
    } else {
      return undefined;
    }
  }

  // null
  let person: null; // π©
  let person2: string | null; //* κ°μ΄ μμ μμ μ μμ λ λͺμμ μΌλ‘ μ¬μ©

  // π© unknown
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // π© any
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    //* void μΌ κ²½μ° λ³΄ν΅ νμμ μλ΅νλ κ²μ΄ κ΄λ‘, but νμ¬ μ»¨λ²€μμ λ°λΌ λͺμν΄ μ£Όλ κ²½μ°λ μμ
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // π©

  // never
  function throwError(message: string): never {
    //* ν¨μμμ μ λ returnλμ§ μμ λ κ·Έκ²μ λͺμνκΈ° μν΄ μ¬μ©λ¨
    // message -> server (log)
    throw new Error(message);
    while (true) {}
    let neverEnding: never; // π©
  }

  // object
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'cat' });
}
