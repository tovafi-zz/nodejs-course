import {StringEncoder} from './string_encoder';
import * as chai from 'chai';

const should = chai.should;

describe('string_encoder', ()=>{
    let encoder;
    beforeEach(function(){
        encoder = new StringEncoder();
    });
    it('should be properly defined. type: StringEncoder',()=>{
     //   let encoder = new StringEncoder();
        encoder.should.be.a('StringEncoder');
    });
    it('should convert input string to binary', ()=>{
        let inputStr = "testString";
        let binaryStr = encoder.convertToBinary(inputStr);
        binaryStr.should.be.equal('01110100 01100101 01110011 01110100 01010011 01110100 01110010 00001010');
    });
    it('should encode input string properly. "C"=>"0 0 00 0000 0 00"', ()=>{
        let binaryStr = encoder.converToBinary('C');
        let result = encoder.encodeBinaryStr(binaryStr);
        result.should.be.equal('0 0 00 0000 0 00');
    });
    it('should encode input string properly. "CC"=>"0 0 00 0000 0 000 00 0000 0 00"', ()=>{
          let binaryStr = encoder.converToBinary('CC');
        let result = encoder.encodeBinaryStr(binaryStr);
        result.should.be.equal('0 0 00 0000 0 000 00 0000 0 00');
    });
    it('should encode input string properly. "%"=>"00 0 0 0 00 00 0 0 00 0 0 0"', ()=>{
          let binaryStr = encoder.converToBinary('%');
        let result = encoder.encodeBinaryStr(binaryStr);
        result.should.be.equal('00 0 0 0 00 00 0 0 00 0 0 0');
    });
});