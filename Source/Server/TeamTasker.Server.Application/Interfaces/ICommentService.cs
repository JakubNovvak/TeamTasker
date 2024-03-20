using TeamTasker.Server.Application.Dtos;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ICommentService
    {
        void CreateComment(CreateCommentDto commentDto);
        IEnumerable<ReadCommentDto> GetAllComments();
        ReadCommentDto GetComment(int id);
    }
}
