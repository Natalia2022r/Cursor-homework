`use strict`


class Student {
    constructor(fullName,  course, university){
        this.fullName = fullName;
        this.university = university;
        this.course = course;
         this.status = true;
   
      
    }

     _getInfo() {
        return (`Студент ` + this.course + `-ого курсу ` + this.university + ` , ` + this.fullName)
      }
      marks(...num){
    
       return this.marks = num.map(elem => Number(elem)).filter((item) => parseInt(item) === item);
      }
      get mark(){
        return this.status ? this.marks : null;
   
      }   
  
    set mark(value) {
       return this.status ? this.mark.push(value) : null;
    }

    getAverageMark(){
        if(!this.status){ 
            
        return console.log(`Вас виключено з навчального закладу, то немає значення якій в вас середній бал`)}   
    const result = (this.mark.reduce((prev, val) => prev += val) / this.mark.length).toFixed(1);
    return  +result;
    }

   dismiss() {
    this.status = false;
    return (this._getInfo() + ` виключено з навчального закладу`)
}

recover() {
    this.status = true;
    return (this._getInfo() + ` поновленно у навчальному закладі`)
}
}


const student =  new Student (`Остап Бендер`, 1 , `Вищої Школи Психотерапії`);
console.log (student)
console.log(student._getInfo())
console.log(student.mark(5, 4, 4, 5))
student.mark = 5;
console.log(student.mark);
console.log(student.getAverageMark())
console.log(student.dismiss())
console.log(student.mark);
console.log(student.recover())
console.log(student.mark);
console.log(student.getAverageMark())


 class BudgetStudent extends Student {
    constructor(fullName,  course, university, scholarShip){
        super(fullName,  course, university,);
        this.scholarShip = scholarShip;
      
        this.getScholarship();
       
    }
    getScholarship(){
        setInterval(() => {
        if(this.getAverageMark() >= 4){
        return console.log(`Ви отримали ` + this.scholarShip + ` грн. стипендії`)}

         if ( this.getAverageMark() < 4){
            return console.log(`Ви погано навчались і не отримуєте стипендії`)}  
        
                 },
 3000);
}
}

 const student1 = new BudgetStudent(`Ігор Васильєв`, 2, 'Військова академія', 1400)
 console.log (student1)
 console.log(student1._getInfo())
 console.log(student1.mark(5, 4, 3, 3))
 console.log(student1.getAverageMark())
 console.log(student1.dismiss())
 console.log(student1.mark)