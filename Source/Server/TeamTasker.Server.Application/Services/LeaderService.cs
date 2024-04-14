using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class LeaderService : ILeaderService
    {
        private readonly IIssueRepository _issueRepository;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly ITeamRepository _teamRepository;
        private readonly IMapper _mapper;

        public LeaderService(IIssueRepository issueRepository, IEmployeeRepository employeeRepository, IProjectRepository projectRepository, ITeamRepository teamRepository, IMapper mapper) {
            _issueRepository = issueRepository;
            _employeeRepository = employeeRepository;
            _projectRepository = projectRepository;
            _teamRepository = teamRepository;
            _mapper = mapper;
        }
        public void CreateIssue(CreateIssueDto issueDto, string email)
        {
            var employee = _employeeRepository.GetUserByEmail(email);

            if (issueDto == null)
                throw new ArgumentNullException(nameof(issueDto));

            var issue = _mapper.Map<Issue>(issueDto);
            var project = _projectRepository.GetProject(issue.ProjectId);
            if (project == null)
                throw new Exception("You are trying to add an issue to a project that does not exist!");

            var team = _teamRepository.GetTeam(project.TeamId);
            if (team == null)
                throw new Exception("Your team is not in this project!");
            if (employee.Id != team.LeaderId)
                throw new Exception("You can't create an issue! You are not team leader!");

            _issueRepository.CreateIssue(issue);
        }
    }
}
