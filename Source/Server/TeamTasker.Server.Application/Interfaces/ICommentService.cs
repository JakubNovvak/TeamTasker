using TeamTasker.Server.Application.Dtos.Comments;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ICommentService
    {
        ReadCommentDto CreateComment(CreateCommentDto commentDto);
        IEnumerable<ReadCommentDto> GetAllComments();
        ReadCommentDto GetCommentById(int id);
    }
}
