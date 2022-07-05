`use strict`


class Student {
    constructor(fullName,  course, university, marks){
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.marks = marks;
         this.status = true;
   
      
    }

     _getInfo() {
        return (`Студент ` + this.course + `-ого курсу ` + this.university + ` , ` + this.fullName)
      }
    
      get mark(){
        if (!this.status) {
                return null;
            }
            return this.marks;
        } 
  
    set mark(value) {
        if (!this.status) {
            return null;
        }
        this.marks.push(value);
    }

    getAverageMark(){
        const result = (this.marks.reduce((prev, val) => prev += val) / this.marks.length).toFixed(1);
        if (!this.status) {
          return null;
        }
        return result;
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

const student =  new Student (`Остап Бендер`, 1 , `Вищої Школи Психотерапії`, [5, 4, 4, 5]);
console.log (student)
console.log(student._getInfo())
console.log(student.mark)
student.mark = 5;
console.log(student.mark);
console.log(student.getAverageMark())
console.log(student.dismiss())
console.log(student.mark);
console.log(student.recover())
console.log(student.mark);
console.log(student.getAverageMark())


 class BudgetStudent extends Student {
    constructor(fullName,  course, university, marks, scholarShip){
        super(fullName,  course, university, marks);
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

 const student1 = new BudgetStudent(`Ігор Васильєв`, 2, 'Військова академія', [5, 4, 4, 5],1400)
 console.log (student1)
 console.log(student1._getInfo())
 console.log(student1.mark)
 student1.mark = 5;
 console.log(student1.getAverageMark())
//  console.log(student1.dismiss())
//  console.log(student1.mark)