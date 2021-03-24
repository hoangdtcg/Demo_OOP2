class Flashlight {
    constructor() {
        this.status = false;
        this.battery = Battery;
    }

    connectBattery(battery){
        this.battery = battery;
    }

    turnOff(){
        alert('Tắt');
    }
    turnOn(){
        this.status = true;
        if(!this.battery.isEmpty()){
            this.battery.decrease();
            alert('Bật. pin còn '+this.battery.getEnergy());

        }
        else
            alert('Đã hết pin, vui lòng thay pin mới để tiếp tục sử dụng');
    }

    switch(){
        this.status = !this.status;
        this.status ? this.turnOn():this.turnOff();
    }
}
