import { HoursPipe } from './hours.pipe';

describe('HoursPipe', () => {
  const someDate = new Date('2000-01-01T15:30:00');
  let pipe: HoursPipe;

  beforeEach(() => {
    pipe = new HoursPipe();
  });

  it('shows h:M by default', () => {
    const result = pipe.transform(someDate);
    expect(result).toBe('15:30');
  });

  it('shows 15h with arguments {{ value | hours:true:false }}', () => {
    const result = pipe.transform(someDate, true, false);
    expect(result).toBe('15h');
  });
});
