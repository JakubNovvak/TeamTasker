using TeamTasker.Server.Application.Dtos.Comments;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ICommentService
    {
        //void CreateComment(CreateCommentDto commentDto);
        IEnumerable<ReadCommentDto> GetAllComments();
        IEnumerable<ReadCommentDto> GetIssueComments(int IssueId);
        ReadCommentDto GetComment(int id);
        void AddCommentToIssue(AddCommentToIssueDto commentDto, string email);
        void AddMessageToProject(AddMessageToProjectDto commentDto);
        void UpdateMessageToProject(UpdateMessageToProjectDto messageDto);
        void DeleteComment(int id);
    }
}
