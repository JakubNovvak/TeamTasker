using TeamTasker.Server.Application.Dtos.Comments;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ICommentService
    {
        void CreateComment(CreateCommentDto commentDto);
        IEnumerable<ReadCommentDto> GetAllComments();
        IEnumerable<GetIssueCommentsDto> GetIssueComments(int IssueId);
        ReadCommentDto GetComment(int id);
        void AddCommnetToIssue(AddCommnetToIssueDto commentDto);
        void AddMessageToProject(AddMessageToProjectDto commentDto);
        void UpdateMessageToProject(UpdateMessageToProjectDto messageDto);
    }
}
