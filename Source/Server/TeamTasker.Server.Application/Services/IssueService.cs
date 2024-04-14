﻿using AutoMapper;
using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Interfaces.Authorization;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class IssueService : IIssueService
    {
        private readonly IProjectRepository _projectRepository;
        private readonly IJwtAuthorizationService _jwtService;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IIssueRepository _issueRepository;
        private readonly ITeamRepository _teamRepository;
        private readonly IMapper _mapper;

        public IssueService(IIssueRepository issueRepository, ITeamRepository teamRepository, IEmployeeRepository employeeRepository, IProjectRepository projectRepository, IJwtAuthorizationService jwtService, IMapper mapper)
        {
            _issueRepository = issueRepository;
            _teamRepository = teamRepository;
            _employeeRepository = employeeRepository;
            _projectRepository = projectRepository;
            _jwtService = jwtService;
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

        /*public void CreateIssue(CreateIssueDto issueDto)
        {
            if (issueDto == null)
                throw new ArgumentNullException(nameof(issueDto));

            var issue = _mapper.Map<Issue>(issueDto);

            _issueRepository.CreateIssue(issue);
        }*/

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

        //1
        //TODO: Change this methods to 4 methods returning 4 types of status. It's good to change the name of dto to match the methods.
        /* public IEnumerable<GetCompletedIssueDto> GetCompletedIssue()
         {
             var issue = _issueRepository.GetAllIssues().Where(issue => issue.Status == "completed");
             var issueDto = issue.Select(i => new GetCompletedIssueDto
             {
                 Id = i.Id,
                 Name = i.Name,
                 Status = i.Status
             });
             return issueDto;
         }

         public IEnumerable<GetCompletedIssueDto> GetNotCompletedIssue()
         {
             var issue = _issueRepository.GetAllIssues().Where(issue => issue.Status == "uncompleted");
             var issueDto = issue.Select(i => new GetCompletedIssueDto
             {
                 Id = i.Id,
                 Name = i.Name,
                 Status = i.Status
             });
             return issueDto;
         }*/

        public IEnumerable<GetIssueAssignedToEmployeeDto> GetIssueAssignedToEmployee(int employeeId)
        {
            var issue = _issueRepository.GetAllIssues().Where(issue => issue.EmployeeId == employeeId);
            var issueDto = issue.Select(i => new GetIssueAssignedToEmployeeDto
            {
                Id = i.Id,
                Name = i.Name,
                Description = i.Description,
                Deadline = i.EndDate,
                Priority = i.Priority,
                ProjectId = i.ProjectId,
            });

            return issueDto;

        }

        public IEnumerable<GetIssueByPriorityDto> GetIssueByPriority(string prioroty)
        {
            var issue = _issueRepository.GetAllIssues().Where(issue => issue.Priority == prioroty);
            var issueDto = issue.Select(i => new GetIssueByPriorityDto
            {
                Id = i.Id,
                Name = i.Name,
                Description = i.Description,
                Deadline = i.EndDate,
                Priority = i.Priority,
                ProjectId = i.ProjectId,
                EmployeeId = i.EmployeeId
            });
            return issueDto;
        }
    }
}
