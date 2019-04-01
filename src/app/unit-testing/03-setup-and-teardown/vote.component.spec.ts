import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });
    it('should increment when upvote called', () => {
    // Arrange
    //    const component = new VoteComponent();
    // Act
       component.upVote();
    // Assert
       expect(component.totalVotes).toBe(1);
    });
    it('should decrease by 1 when downvote called', () => {
       component.downVote();
       expect(component.totalVotes).toBe(-1);
    });
});
