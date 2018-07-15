import 'mocha';
import assert from 'assert';
import { hello } from '../src/hello';

describe('hello', function() {
    it('logs hello', function() {
        const _log = console.log;
        const actual = { arg: undefined };
        console.log = (arg: any) => actual.arg = arg;

        hello();

        console.log = _log;
        assert.equal(actual.arg, 'hello');
    })
})
