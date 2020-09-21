var assert = chai.assert;

describe('getSpecialCount()', function(){
    it('should equal 2', function(){
        assert.equal(2, getSpecialCount('abcd1!@'));
    });
});

describe('getNumberCount()', function(){
    it('should equal 1', function(){
        assert.equal(1, getNumberCount('abcd1!@'));
    });
});

describe('getUpperCount()', function(){
    it('should equal 2', function(){
        assert.equal(2, getUpperCount('abCD1!@'));
    });
});