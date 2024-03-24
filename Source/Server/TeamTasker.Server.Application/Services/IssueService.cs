using AutoMapper;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Infrastructure.Services
{
    public class IssueService : IIssueService
    {
        private readonly IIssueRepository _issueRepository;
        private readonly IMapper _mapper;

        public IssueService(IIssueRepository issueRepository, IMapper mapper)
        {
            _issueRepository = issueRepository;
            _mapper = mapper;
        }

        public void CreateIssue(CreateIssueDto issueDto)
        {
            if (issueDto == null)
                throw new ArgumentNullException(nameof(issueDto));

            var issue = _mapper.Map<Issue>(issueDto);

            _issueRepository.CreateIssue(issue);
        }

        public IEnumerable<ReadIssueDto> GetAllIssues()
        {
            var issues = _issueRepository.GetAllIssues();
            var issueDtos = _mapper.Map<IEnumerable<ReadIssueDto>>(issues);

            return issueDtos;
        }

        public ReadIssueDto GetIssue(int id)
        {
            var issue = _issueRepository.GetIssue(id);

            if (issue == null)
                return null;

            var issueDto = _mapper.Map<ReadIssueDto>(issue);

            return issueDto;
        }
    }
}
