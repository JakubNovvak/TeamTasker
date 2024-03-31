using TeamTasker.Server.Application.Dtos.Comments;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ICommentService
    {
        void CreateComment(CreateCommentDto commentDto);
        IEnumerable<ReadCommentDto> GetAllComments();
        ReadCommentDto GetComment(int id);
        void AddMessageToProject(AddMessageToProjectDto commentDto);
        void UpdateMessageToProject(UpdateMessageToProjectDto messageDto);
    }
}
