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
  let name: undefined; // 💩
  let age: number | undefined; //* 데이터 타입이 있거나 아직 결정되지 않았을 때 사용 (null보다 보편적으로 사용됨)
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
  let person: null; // 💩
  let person2: string | null; //* 값이 아예 없을 수 있을 때 명시적으로 사용

  // 💩 unknown
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // 💩 any
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    //* void 일 경우 보통 타입을 생략하는 것이 관례, but 회사 컨벤션에 따라 명시해 주는 경우도 있음
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    //* 함수에서 절대 return되지 않을 때 그것을 명시하기 위해 사용됨
    // message -> server (log)
    throw new Error(message);
    while (true) {}
    let neverEnding: never; // 💩
  }

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'cat' });
}
