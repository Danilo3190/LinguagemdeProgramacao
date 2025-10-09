function LinkedList() {
  let Node = function(elemento) {
    this.elemento = elemento;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function(elemento) {
    let node = new Node(elemento), current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.size = function() {
    return length;
  };
  this.size2 = function() {
    var contador = 0;
    var current = head;
    while (current) {
      current = current.next;
      contador++;
    }
    return contador;
  };
  this.toString = function() {
    let current = head;
    let string = '';
    while (current) {
      string += current.elemento + (current.next ? ' -> ' : '');
      current = current.next;
    }
    return string;
  };
  
  
  }


lista = new LinkedList();
lista.append(10);
lista.append(12);
console.log(lista.size()); // Saída esperada: 2
console.log(lista.size2());
console.log(toString)
console.log('----------------')
lista.append(2)
lista.append(5)
console.log(lista.size())
console.log(lista.size2())
console.log('Lista: ', lista.toString())
console.log('----------------')


//----------------------------
function LinkedList() {
  let Node = function(elemento) {
    this.elemento = elemento;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.toString = function() {
    let current = head, string = ' '
      while (current) {
       string += current +(current.next ? ' -> ' : '')
       current = current.next;
      }

      
    }
    return string
  };
  


lista = new LinkedList();
lista.append(10);
lista.append(11);
lista.append(12)
console.log(lista.size()); 

this.removeFirst = function() {
  if (head === null) return null; // Lista vazia
  let removed = head.elemento;
  head = head.next;
  length--;
  return removed;
};
//------------------------------
function LinkedList() {
  let Node = function(elemento) {
    this.elemento = elemento;
    this.next = null;
  };

  let length = 0;
  let head = null;

  // Adiciona um elemento no final da lista
  this.append = function(elemento) {
    let node = new Node(elemento), current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  // Retorna o tamanho da lista (com base no contador interno)
  this.size = function() {
    return length;
  };

  // Retorna o tamanho da lista contando os nós manualmente
  this.size2 = function() {
    let contador = 0;
    let current = head;
    while (current) {
      current = current.next;
      contador++;
    }
    return contador;
  };

  // Retorna uma string representando os elementos da lista
  this.toString = function() {
    let current = head;
    let string = '';
    while (current) {
      string += current.elemento + (current.next ? ' -> ' : '');
      current = current.next;
    }
    return string;
  };

  // Insere um elemento no início da lista
  this.prepend = function(elemento) {
    let node = new Node(elemento);
    node.next = head;
    head = node;
    length++;
  };

  // Remove o primeiro elemento da lista
  this.removeFirst = function() {
    if (head === null) return null;
    let removed = head.elemento;
    head = head.next;
    length--;
    return removed;
  };

  // Retorna a posição de um elemento na lista
  this.indexOf = function(elemento) {
    let current = head;
    let index = 0;
    while (current) {
      if (current.elemento === elemento) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };

  // Remove o elemento de uma posição específica
  this.removeAt = function(index) {
    if (index < 0 || index >= length) return null;

    let current = head;
    if (index === 0) {
      head = current.next;
    } else {
      let previous;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
    }

    length--;
    return current.elemento;
  };
}
let lista = new LinkedList();

lista.append(10);
lista.append(12);
console.log('Tamanho:', lista.size());       // 2
console.log('Tamanho (manual):', lista.size2()); // 2
console.log('Lista:', lista.toString());     // 10 -> 12

console.log('----------------');

lista.append(2);
lista.append(5);
console.log('Tamanho:', lista.size());       // 4
console.log('Tamanho (manual):', lista.size2()); // 4
console.log('Lista:', lista.toString());     // 10 -> 12 -> 2 -> 5

console.log('----------------');

lista.prepend(1);
console.log('Após inserir no início:', lista.toString()); // 1 -> 10 -> 12 -> 2 -> 5

lista.removeFirst();
console.log('Após remover o primeiro:', lista.toString()); // 10 -> 12 -> 2 -> 5

console.log('Índice do elemento 12:', lista.indexOf(12)); // 1

lista.removeAt(2);
console.log('Após remover na posição 2:', lista.toString()); // 10 -> 12 -> 5




   
  