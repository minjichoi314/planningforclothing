import test from 'node:test';
import assert from 'node:assert/strict';
import {validate} from '../server.js';
test('only six sets of three answers and an allowed career pass',()=>{
 const payload={career:'자산관리자',steps:Array.from({length:6},()=>({answers:['a','b','c']}))};
 assert.equal(validate(payload),true);
 assert.equal(validate({...payload,career:'없는 직업'}),false);
 assert.equal(validate({...payload,steps:payload.steps.slice(1)}),false);
 assert.equal(validate({...payload,steps:[{answers:['one']},...payload.steps.slice(1)]}),false);
});
