{
  /**
   * Type Inference
   */
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function addNum(x: number, y: number): number {
    return x + y;
  }
  const result = addNum(1, 2);
}
