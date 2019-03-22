'use strict';

const affine=require('./affine');
var b=33;

const crypt={
    login:(pwd,len)=>{
        var a=k.key(len);
        affine.encrypt(pwd,a,b);
    }


}
const k={
    key:(len)=>{
        if(len==6){
            a=3;
        }
        else if(len==7){
            a=5;
        }
        else if(len==8){
            a=7;
        }
        else if(len==9){
            a=9;
        }
        else if(len==10){
            a=11;
        }
        else if(len==11){
            a=13;
        }
        else if(len==12){
            a=15;
        }
        else if(len==13){
            a=15;
        }
        else if(len==14){
            a=19;
        }
        else if(len==15){
            a=21;
        }
        else if(len==16){
            a=23;
        }
    }
}