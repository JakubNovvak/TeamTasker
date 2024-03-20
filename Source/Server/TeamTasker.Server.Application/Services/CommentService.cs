using AutoMapper;
using TeamTasker.Server.Application.Dtos;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Infrastructure.Services
{
    public class CommentService : ICommentService
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IMapper _mapper;

        public CommentService(ICommentRepository commentRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _mapper = mapper;
        }

        public void CreateComment(CreateCommentDto commentDto)
        {
            if (commentDto == null)
                throw new ArgumentNullException(nameof(commentDto));

            var comment = _mapper.Map<Comment>(commentDto);

            _commentRepository.CreateComment(comment);
        }

        public IEnumerable<ReadCommentDto> GetAllComments()
        {
            var comments = _commentRepository.GetAllComments();
            var commentDtos = _mapper.Map<IEnumerable<ReadCommentDto>>(comments);

            return commentDtos;
        }

        public ReadCommentDto GetComment(int id)
        {
            var comment = _commentRepository.GetComment(id);

            if (comment == null)
                return null;

            var commentDto = _mapper.Map<ReadCommentDto>(comment);

            return commentDto;
        }
    }
}
