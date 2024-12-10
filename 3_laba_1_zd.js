class Plenty {
    constructor(elements = []) {
      this.elements = new Set(elements);
    }
  
    get(element) {
      this.elements.get(element);
    }
  
    set(element) {
      this.elements.delete(element);
    }
  
   intersection(otherSet) {
      return new Plenty([...this.elements].filter(elem => otherSet.elements.has(elem)));
    }
  
    difference(otherSet) {
      return new Plenty([...this.elements].filter(elem => !otherSet.elements.has(elem)));
    }
  
    print() {
      console.log([...this.elements]);
    }
  
    static fromArray(array, condition) {
      return new Plenty(array.filter(condition));
    }
  }
  
  let array1 = [1, 2, 3, -4, -5, 6, 7, -8, 9, 10];
  let array2 = [2, -4, 5, 6, 7, -8, 11, 12, -13];
  
  let evenSet = Plenty.fromArray(array1, x => x % 2 === 0);
  evenSet.print();
  
  let oddSet = Plenty.fromArray(array1, x => x % 2 !== 0);
  oddSet.print();
  
  let negativeSet = Plenty.fromArray(array1, x => x < 0);
  negativeSet.print();
  
  let evenSet2 = Plenty.fromArray(array2, x => x % 2 === 0);
  let intersectionSet = evenSet.intersection(evenSet2);
  intersectionSet.print();
  
  let differenceSet = evenSet.difference(evenSet2);
  differenceSet.print();
//1