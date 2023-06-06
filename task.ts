// const makeArr = <T, Y>(x: T, y: Y) => {return [x, y]}


// const makeFullName = (obj: {firstName: string; lastName: string}) => {
//     return {
//         ...obj,
//         fullName: obj.firstName + " " + obj.lastName;
//     }
// };


// // into
// // const makeFullName = <T extends {firstName: string; lastName: string}>(obj: T)
// //     return {
// //         ...obj,
// //         fullName: obj.firstName + " " + obj.lastName;
// //     }
// // };

// interface Tab<T> {
//     id: string;
//     position: number;
//     data: T;
// }
// type StringTab = Tab<String>;
// type NumberTab = Tab<number>; // same as this
// type NumberTab = {
//     id: string;
//     position: number;
//     data: number;
// }


// const score: Array<number> = [];
// const names: Array<string> = [];

// function identiyOne(val: boolean | number): boolean | number {return val}
// function identityTwo(val: any): any {return val}
// function identityThree<Type>(val: Type): Type {return val}

// function identityFour<T>(val: T): T {return val}

// interface Bottle {
//     brand: string,
//     type: number,
// }

// identityFour<Bottle>({brand:"", type:2})



// const echo = <T> (arg: T): T => arg;

// const isObj = <T> (arg: T): boolean => {
//     return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
// }

// const isTrue = <T> (arg: T): BoolCheck<T> => {
//     if (Array.isArray(arg) && !arg.length) {return { value: arg, is: false }}
//     if (isObj(arg) && !Object.keys(arg as keyof T).length) {
//         return { value: arg, is: false}
//     }
//     return { value: arg, is: !!arg}
// }

// interface BoolCheck <T> {
//     value: T,
//     is: boolean,
// }

// interface HasID {
//     id: number,
// }
// // now T will have to have an id property, required
// const processUser = <T extends HasID>(user: T): T =>
// {
//     return user;
// }

// console.log(processUser({id: 1, name: "dave"}));

// const getUsersProperty = <T extends HasID, K extends keyof T> (users: T[], key: K): T[K][] => {
//     return users.map(user => user[key]);
// }


// class customArray<T> {private arr: T[] = [];
//     getItems (arr: T[]) {return this.arr = arr}
//     addItem (item: T) {this.arr.push(item)}
//     removeItem (item: T) {
//         let index = this.arr.indexOf(item);
//         if (index > -1) {this.arr.splice(index, 1)}}}
// let numObj = new customArray<number>();
// numObj.addItem(10)


// type ProgrammingLanguage = {name: string;};
// function identity<T>(value: T): T { return value;}
// const result = identity<ProgrammingLanguage>({ name: "TypeScript" });



// class HttpApplication<Context> {
//     context: Context
//     constructor(context: Context){
//         this.context = context;}
//     // ...implementation
//     get(url: string, handler: (context: Context) => Promise<void>): this {
//         // ...implementation
//         return this;
//     }
// }

// const context = { someValue: true };
// const app = new HttpApplication(context);
// app.get('/api', async () => {
//     console.log(context.someValue)
// })

// type Partial1 <T> = {[P in keyof T]?: T[P]}

type IsStringType<T> = T extends string ? true : false;
type A = "abc";
type B = {name: string;};
type ResultA = IsStringType<A>;
type ResultB = IsStringType<B>;

type GetReturnType <T> = T extends (...args: any[]) => infer U ? U : never;
function someFunction() {return true;}
type ReturnTypeOfSomeFunction = GetReturnType<typeof someFunction>;

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype)
}




interface Todo {title: string, description: string};
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};}
const todo1 = {title: "organize desk", description: "clear clutter"}
const todo2 = updateTodo(todo1, {description: "throw out trash"})




interface Todo1 {title: string, description: string, completed: boolean, createdAt: number};
type TodoPreview = Omit<Todo1, 'description'>;
const todo: TodoPreview = {title: 'clean room', completed: false, createdAt: 1}
type TodoInfo = Omit<Todo1, 'completed' | 'createdAt'>;
const todoInfo: TodoInfo = {title: 'pick up kids', description: 'description'}


