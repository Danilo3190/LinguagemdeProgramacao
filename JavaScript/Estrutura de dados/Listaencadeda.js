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
    if (index -1 && index < length);

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
  return null
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


//-----------------------------------------------------------------------------
//feito pela Jaqueline
function LinkedList(){

  let Node = function(element){
      this.element = element
      this.next = null
  };

  let length = 0;
  let head = null;

  this.append = function(element){     
      let node = new Node(element), current    
      if(head === null){
          head = node
      }else{  
          current = head
          while(current.next){ 
              current = current.next
          }
          current.next = node
      }
      length++
  };

  this.size = function(){
      return length
  };

  this.size2 = function(){
      var cont = 0
      var current = head

      while(current){
          current = current.next
          cont++
      }
      return cont
  };

  this.toString = function(){
      let current = head, string = ''
      while(current){
          string += current.element + (current.next ? ' -> ' : '')
          current = current.next
      }
      return string
  };

  this.empty = function(){
      return length == 0;
  };

  this.removePrimeiro = function(){
      let current = head;

      if(this.length == 0){
          return -1
      }else{
          head = current.next
          length--
          return current.element
      }
  };

  this.insereInicio = function(element){
      let node = new Node(element)
      node.next = head
      head = node
      length++
  };

  this.Index = function(element){
      let current = head
      let index = 0
      while(current){
          if(element == current.element){
              return index
          }
          index++
          current = current.next
      }
      return -1
  };

  this.removeAt = function(position){
      //verifica valores fora do intervalo
      if(position > -1 && position < length){
          let current = head,
          previous,
          index = 0;
          //Remove Primeiro Elemento
          if (position == 0){
              head = current.next;
          }else{
              while (index ++ < position){
                  previous = current;
                  current = current.next;
              }
              //Faz a Ligação de previous com o next de current: pula esse elemento para removê-lo
              previous.next = current.next;
          }
          length --;
          return current.element;
      }else{
          return null;
      }
  };

}


//Programa Principal
lista = new LinkedList()
lista.append(10)
lista.append(12)
lista.append(5)

console.log(lista.size())
console.log('Lista: ', lista.toString())
console.log('--------')

console.log('Elemento removido', lista.removePrimeiro())

console.log(lista.size())
console.log('Lista: ', lista.toString())
console.log('--------')

lista.insereInicio(6)
console.log(lista.size())
console.log('Lista: ', lista.toString())
console.log('--------')

console.log('índice = ', lista.Index(5))
console.log('--------')

console.log('Ekemento removido = ', lista.removeAt(7))
console.log(lista.size())
console.log('Lista: ', lista.toString())





   
  