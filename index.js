/*Object Declaration Syntex
const objectName ={
    key: 'value',
    key: 'value',
}
*/
//example: Suppose i create a Student object

const student ={
     name: 'Raihan',
     class: 'MBA',
     subject: 'English',
 }
 
 console.log('Student All Object is :', student) 
 console.log('single object:', student['name']) 


 const employee = {
     name: 'Raihan',
     age: '20',
     profession: 'Developer',
     selary: '95000',
 }
 employee.selary = 3000; 
 console.log('Employee Details:', employee)
 
 
 
 
 const computer = {
     brand: 'Hp',
     processor : ' Ryzon 7 5700g',
     price: '17500 tk',
 }
 
 const keys = Object.keys(computer) 
 console.log('This is Only Object Keys:', keys)
 
 const mobile = {
     brand: 'Samsung',
     processor : 'coalcomn Snapdragor',
     ram: '12 GB',
     rom: '128 GB',
     price: '12500 tk',
 }
 
 const value = Object.values(mobile); // only key value
 console.log('All object keys value:', value)
 
 const college ={
     name: 'Govt. commerce College',
     class: ['HSC', 'BBS', 'BBA', 'BSS', 'MBA'],
     unique: {
         dressColor: 'Blue',
         result:{
             gpa: 5,
             merit: 'Top'
         }
     }
 }
 console.log('Access all key values:', college); // Access all key values
 console.log('Access single key value: ', college.unique.result.merit);
 
     const man = {
         name: 'Rehan',
         age: 24,
     }
 
     delete man.age; // 
     console.log("Object is: ",man)
 
 const phone ={
     brand: 'Xiaomi',
     price: 25000,
     color: 'Black'
 }
 
 //Method: 01 using For Loop
 for (const property in phone){
     console.log(property ,':'); 
     console.log( phone[property]) 
 }

 
 //Method: 02  Normal
 const key = Object.keys(phone)
 console.log('Key Is:', key)
 
 const valuee = Object.values(phone)
 console.log( 'value is:', valuee)
 