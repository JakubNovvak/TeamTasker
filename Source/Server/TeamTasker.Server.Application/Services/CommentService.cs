using AutoMapper;
using TeamTasker.Server.Application.Dtos.Comments;
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

        public ReadCommentDto CreateComment(CreateCommentDto commentDto)
        {
            if (commentDto == null)
                throw new ArgumentNullException(nameof(commentDto));

            var comment = _mapper.Map<Comment>(commentDto);
            _commentRepository.CreateComment(comment);
            
            var readCommentDto = _mapper.Map<ReadCommentDto>(comment);
            return readCommentDto;
        }

        public IEnumerable<ReadCommentDto> GetAllComments()
        {
            var comments = _commentRepository.GetAllComments();
            var commentDtos = _mapper.Map<IEnumerable<ReadCommentDto>>(comments);

            return commentDtos;
        }

        public ReadCommentDto GetCommentById(int id)
        {
            var comment = _commentRepository.GetComment(id);

            if (comment == null)
                throw new ArgumentNullException(nameof(comment));

            var commentDto = _mapper.Map<ReadCommentDto>(comment);

            return commentDto;
        }
    }
}
