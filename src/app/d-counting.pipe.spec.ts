import { DCountingPipe } from './d-counting.pipe';

describe('DCountingPipe', () => {
  it('create an instance', () => {
    const pipe = new DCountingPipe();
    expect(pipe).toBeTruthy();
  });
});
