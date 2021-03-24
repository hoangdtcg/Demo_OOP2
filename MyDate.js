class MyDate {
    constructor(day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    //Getter - Setter
    //Getter - có giá trị trả về/ Return
    //Setter - thay đổi giá trị thuộc tính
    getDay(){
        return this.day;
    }
    setDay(value){
        this.day = value;
    }

    getMonth(){return this.month;}
    setMonth(value){this.month = value;}

    getYear(){
        return this.year;
    }
    setYear(value){
        this.year = value;
    }
}

