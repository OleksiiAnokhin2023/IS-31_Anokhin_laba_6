const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
   };


   const currentMedicines = Object.keys(medicines).filter(name => medicines[name] > new Date()).sort((a, b) => medicines[a] - medicines[b]);

console.log(currentMedicines);


const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];

  function newMass(fruits){
    const new_fruits = fruits.map((element,index)=>{
        return {
            id: index+1,
            name: element.name,
            price: element.price*0.8
        };
    });
       return new_fruits; 
  }
  console.log(newMass(fruits)); 

  class Client {
    #login;
    #email;

    constructor(login, email)
    {
        this.#login = login;
        this.#email = email;
    }

    get login(){
        return this.#login
    }

    get email(){
        return this.#email;
    }
    set login(login){
        this.#login = login;
    }
    set email(email){
        this.#email=email;
    }

  }
  const client =  new Client('AlexGey','alexgeyver2023@gmail.com')
  console.log(client.login);
  console.log(client.email);



  const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    function countTags(tweets) {
        const tagCounts = {};
    
        tweets.forEach(tweet => {
            tweet.tags.forEach(tag => {
                if (tagCounts[tag]) {
                    tagCounts[tag] += 1;
                } else {
                    tagCounts[tag] = 1;
                }
            });
        });
    
        return tagCounts;
    }
    
     
    console.log(countTags(tweets));


  function checkBrackets(str){

    const stack = [];
    const compr_val = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for (const element of str) {
        if(compr_val[element])
            stack.push(element) 
        else if(Object.values(compr_val).includes(element)){
            const last =stack.pop();
            if(compr_val[last]!==element) return false;
        }
    }
    return stack.length===0;
  } 
  console.log(checkBrackets('someFn() {} []'));
  console.log(checkBrackets('fdjfoff{'));      
  console.log(checkBrackets('[(])'));           
  console.log(checkBrackets('{[()]}'));         
  console.log(checkBrackets('{([])}')); 
  console.log(checkBrackets('{([]})')); 
  console.log(checkBrackets('{([)')); 
  console.log(checkBrackets('аощавошщвпова(атвоащшл)ываыа(]')); 

  

