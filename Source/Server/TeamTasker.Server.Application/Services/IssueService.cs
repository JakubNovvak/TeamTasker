using AutoMapper;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class IssueService : IIssueService
    {
        private readonly IProjectRepository _projectRepository;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IIssueRepository _issueRepository;
        private readonly IMapper _mapper;

        public IssueService(IIssueRepository issueRepository,IEmployeeRepository employeeRepository,IProjectRepository projectRepository, IMapper mapper)
        {
            _issueRepository = issueRepository;
            _employeeRepository = employeeRepository;
            _projectRepository = projectRepository;
            _mapper = mapper;
        }

        public void AddIssueToProject(AddIssueToProjectDto issueDto)
        {
            if (issueDto == null)
                throw new ArgumentNullException(nameof(issueDto));

            var project = _projectRepository.GetProject(issueDto.ProjectId);
            if (project == null)
                throw new Exception("Project not found");

            var employee = _employeeRepository.GetEmployee(issueDto.EmployeeId);
            if (employee == null)
                throw new Exception("Employee not found or employee is admin");


            var issue = _mapper.Map<Issue>(issueDto);
            _issueRepository.CreateIssue(issue);
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
