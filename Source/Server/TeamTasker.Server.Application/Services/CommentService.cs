using AutoMapper;
using TeamTasker.Server.Application.Dtos.Comments;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class CommentService : ICommentService
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly IMapper _mapper;

        public CommentService(ICommentRepository commentRepository,IProjectRepository projectRepository, IMapper mapper)
        {
            _commentRepository = commentRepository;
            _projectRepository = projectRepository;
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

        public void AddMessageToProject(AddMessageToProjectDto commentDto)
        {
            if (commentDto == null)
                throw new ArgumentNullException(nameof(commentDto));

            var project = _projectRepository.GetProject(commentDto.ProjectId);

            if (project == null)
                throw new Exception("Project not found");

            var message = _mapper.Map<Comment>(commentDto);
            _commentRepository.CreateComment(message);
        }

        public void UpdateMessageToProject(UpdateMessageToProjectDto commentDto)
        {
            if (commentDto == null)
                throw new ArgumentNullException(nameof(commentDto));

            var project = _projectRepository.GetProject(commentDto.ProjectId);
            var comment = _commentRepository.GetComment(commentDto.Id);


            if (comment == null)
            {
                throw new Exception("Comment not found.");
            }

            if (project == null || comment.ProjectId != commentDto.ProjectId)
            {
                throw new Exception("Project not found or this command have another projectId");
            }

            comment.Content = commentDto.Content;
            _commentRepository.UpdateComment(comment);
        }
    }
}
