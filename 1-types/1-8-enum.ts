{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MEX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    TuesDay,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Thursday;
  day = 10; // ❗️ Enum은 타입이 정확하게 보장되지 않은 채로 에러 없이 컴파일됨
  console.log(day);

  // ✅ Union Type을 사용하면 타입이 보장된 상태로 사용이 가능하기 때문에 Enum보다 안전함
  type DaysOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday';
}
