/**
 * the stack
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022 11 03
 */

class MrCoxallStack {
  // private array
  private readonly stack: number[] = []

  // gathers the pushed number
  public pushed(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // getter
  public getStack(): any {
    return this.stack
  }

  // pops top number
  popNumber(): number | undefined | string {
    if (this.stack.length !== 0) {
      return this.stack.pop()
    } else {
      return 'No items to pop'
    }
  }
}
export = MrCoxallStack
