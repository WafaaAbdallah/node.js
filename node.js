// const prompt = require('prompt-sync')({sigint: true});const prompt = require('prompt-sync')({sigint: true});
// class Node {
//     constructor(age,highlight, nextNode) {
//       this.age= age;
//       this.highlight = highlight; 
//       this.nextNode= nextNode;
//     }
    
//   }
//   const node7 = new Node (7,"Im 7 now")
//     class LinkedList {
//     constructor(data, nextNode) {
//       this.headNode = new Node(data, nextNode);
//     }
  
  
    
  
//     get dataAsString() {
//       let dataString = "";
//       let currentNode = this.headNode;
//       while (currentNode) {
//         //   console.log(currentNode.data);
//         dataString = dataString + `${currentNode.data} \n`;
//         currentNode = currentNode.nextNode;
//       }
//       // console.log("heeelo", dataString);
//       return dataString;
//     }
//   }
  
//   const nodeOne = new Node("yousef");
//   const myList = new LinkedList("abdallah", nodeOne);
  
//   myList.addBeginning("Esraa");
//   myList.addBeginning("Wafaa");
  
//   console.log(myList.dataAsString);
  
//   myList.removeNode("Esraa");
//   console.log(myList.dataAsString);
  
//   myList.removeNode("Wafaa");
//   console.log(myList.dataAsString);

const prompt = require('prompt-sync')({sigint: true}); 


class Node {
    constructor(age, highlight ,nextNode = null) {
      this.age = age;
      this.highlight = highlight
      this.nextNode = nextNode; // our link
    }
  }

  class LinkedList {
    constructor(age, highlight, nextNode) {
      this.head = new Node(age, highlight, nextNode);
    }

    addBeginning = (age , highlight) => {
        const node = new Node(age, highlight , this.head);
        this.head = node;
      };
    
      getLinkedList = () => {
          let current = this.head;
          while (current) {
              console.log(`year : ${current.age} , highlight : ${current.highlight} : `)
              current = current.nextNode;
          }
      }
      inserthighlight= (age) =>{
      let current = this.head;
      while (current.age < age)  {
          let currentAge =current.age +1 ;
        if (current.nextNode && current.nextNode.age === currentAge) {
            current = current.nextNode;
        }     
      else {
          let highlight = prompt(`enter highlight for year ${currentAge}`)
          let newNode = new Node(currentAge, highlight, current.nextNode);
          current.nextNode = newNode;
          current = newNode;
      }
    }
      }
      }
      const ageList = new LinkedList(7, "i was seven")
      ageList.addBeginning(3, "i started walking")
      ageList.addBeginning(1, "i was born")
      let age = prompt("enter your age :")
      ageList.inserthighlight(age)
      ageList.getLinkedList()