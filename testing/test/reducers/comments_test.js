import { expect } from '../test_helper'
import {SAVE_COMMENT} from '../../src/actions/types'
import commentsReducer from '../../src/reducers/comments'

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    const resultState = commentsReducer( undefined, {type: 'UNKNOWN'});
    expect(resultState).to.be.instanceof(Array);
    // eql does a deep comparison whereas equal does identity
    // comparison which will not work as we return a new array
    //expect(resultState).to.equal([]);
    expect(resultState).to.eql([]);
  });

  it('handles action with type SAVE_COMMENT', () => {
    expect(commentsReducer(undefined, {type: SAVE_COMMENT, payload: 'myComment'})).to.eql(['myComment'])
  });
});
