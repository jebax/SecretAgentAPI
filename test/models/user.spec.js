import sinon from 'sinon'
import { expect } from 'chai'
import User from '../../src/models/user'

describe('User', () => {
  it('should save if name and email are supplied', done => {
    const user = new User({
      name: 'TestName',
      email: 'TestEmail'
    })

    user.validate(err => {
      expect(err).to.not.exist
      done()
    })
  })

  it('should be invalid if name is not supplied', done => {
    const user = new User({
      email: 'TestEmail'
    })

    user.validate(err => {
      expect(err.errors.name).to.exist
      done()
    })
  })
})
