import Chai from 'chai'
import app from './src/app'

const chai = Chai.expect;

describe('Check for app functionality', () => {
  it('should return `Input must be an integer` for string', () => {
    const value = app.numSplit('wee')
    chai(value).equal('Input must be an integer')
  });
  it('should return `Input must not be empty` for string', () => {
    const value = app.numSplit('')
    chai(value).equal('Input must not be empty')
  });
  it('should return an array of even number', () => {
    const value = app.numSplit([20, 30, 49, 50, 70])
    value.map(odd => chai(odd % 2 === 0)).equal(true)
  })
  it('should return an array of odd number', () => {
    const value = app.numSplit([20, 30, 49, 50, 70])
    value.map(even => chai(odd % 2 !== 0)).equal(false )
  })
})