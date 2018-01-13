import Chai from 'chai'
import app from './src/app'

const expect = Chai.expect;

describe('Check for app functionality', () => {
  it('should return `Input must be an integer` for string', () => {
    const value = app.numSplit('wee')
    expect(value).equal('Input must be an integer')
  });
  it('should return `Input must not be empty` for string', () => {
    const value = app.numSplit('')
    expect(value).equal('Input must not be empty')
  });
  it('should return an array of even number', () => {
    const value = app.numSplit([20, 30, 49, 50, 70])
    value.map(odd => expect(odd % 2 === 0)).equal(true)
  })
  it('should return an array of odd number', () => {
    const value = app.numSplit([20, 30, 49, 50, 70])
    value.map(even => expect(even % 2 !== 0)).equal(false )
  })
})