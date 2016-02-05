utils = require '../src/utils'

describe 'Utils', ->
  describe 'getType(obj)', ->
    it 'should return type boolean', ->
      utils.getType(true).should.be.equal 'boolean'

    it 'should return type number', ->
      utils.getType(123).should.be.equal 'number'

    it 'should return type string', ->
      utils.getType('string').should.be.equal 'string'

    it 'should return type function', ->
      utils.getType(->).should.be.equal 'function'

    it 'should return type array', ->
      utils.getType(['2','2']).should.be.equal 'array'

    it 'should return type date', ->
      utils.getType(new Date()).should.be.equal 'date'

    it 'should return type regexp', ->
      utils.getType(/123/g).should.be.equal 'regexp'

    it 'should return type object', ->
      utils.getType(new Object).should.be.equal 'object'

  describe 'isType(obj, type)', ->
    it 'should compare the obj to the type', ->
      utils.isType('stringtest', 'string').should.be.true
      utils.isType(123, 'string').should.be.false

  describe 'isEmpty', ->
    it 'should return if an object is empty', ->
      utils.isEmptyObject({}).should.be.true
      utils.isEmptyObject({id: 'id'}).should.be.false