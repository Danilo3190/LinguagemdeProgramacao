class HashTableEncadeada {
  constructor(size) {
    this.size = size;
    this.table = Array.from({ length: size }, () => []);
  }

  hash(key) {
    return key.charCodeAt(0) % this.size;
  }

  insert(key) {
    const index = this.hash(key);
    this.table[index].push(key);
  }

  print() {
    this.table.forEach((list, index) => {
      console.log(`${index}: ${list.join(" → ")}`);
    });
  }
}

// Teste
const encadeada = new HashTableEncadeada(7);
const keys = ['N', 'I', 'V', 'O', 'Z', 'U', 'A', 'E', 'F', 'R', 'B', 'L'];
keys.forEach(key => encadeada.insert(key));
encadeada.print();
//-----------------------------------

class HashTableLinear {
  constructor(size) {
    this.size = size;
    this.table = Array(size).fill(null);
  }

  hash(key) {
    return key.charCodeAt(0) % this.size;
  }

  insert(key) {
    let index = this.hash(key);
    while (this.table[index] !== null) {
      index = (index + 1) % this.size; 
    }
    this.table[index] = key;
  }

  print() {
    this.table.forEach((value, index) => {
      console.log(`${index}: ${value !== null ? value : ""}`);
    });
  }
}

// Teste
const linear = new HashTableLinear(13);
keys.forEach(key => linear.insert(key));
linear.print();
