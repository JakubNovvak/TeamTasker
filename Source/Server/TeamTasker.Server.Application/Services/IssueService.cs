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

        public ReadIssueDto CreateIssue(CreateIssueDto issueDto)
        {
            if (issueDto == null)
                throw new ArgumentNullException(nameof(issueDto));

            var issue = _mapper.Map<Issue>(issueDto);
            _issueRepository.CreateIssue(issue);

            var readIssueDto = _mapper.Map<ReadIssueDto>(issue);
            return readIssueDto;
        }

        public IEnumerable<ReadIssueDto> GetAllIssues()
        {
            var issues = _issueRepository.GetAllIssues();
            var issueDtos = _mapper.Map<IEnumerable<ReadIssueDto>>(issues);

            return issueDtos;
        }

        public ReadIssueDto GetIssueById(int id)
        {
            var issue = _issueRepository.GetIssue(id);

            if (issue == null)
                throw new ArgumentNullException(nameof(issue));

            var issueDto = _mapper.Map<ReadIssueDto>(issue);

            return issueDto;
        }

        public ReadIssueDto UpdateIssue(CreateIssueDto updateDto)
        {
            throw new NotImplementedException();
        }
    }
}
