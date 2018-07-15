import 'mocha';
import assert from 'assert';


describe('Object.values', function() {
    it('can be called', function() {
        const values = Object.values({a:1});

        assert.equal(values[0], 1);
    })
})
