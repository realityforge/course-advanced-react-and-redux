import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
// Note the next line does not need to be suffixed by "/index" as automatched based on name
import { saveComment } from '../../src/actions';

// Usually it is good to have top level describe for each file
describe('actions', () => {

  // And another descibe for each action
  describe('saveComment', () => {
    //Actions tend to be tested at a lower level than ui/react components
    it('has the correct type', () => {
      const action = saveComment("ignored");
      expect(action.type).to.be.equal( SAVE_COMMENT)
    });
    it('has the correct payload', () => {
      const action = saveComment("My New Comment");
      expect(action.payload).to.be.equal("My New Comment")
    });
  });
});
