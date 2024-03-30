﻿using AutoMapper;
using TeamTasker.Server.Application.Dtos.EmployeeTeam;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository _teamRepository;
        private readonly IEmployeeTeamRepository _employeeTeamRepository;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IMapper _mapper;

        public TeamService(ITeamRepository teamRepository,IEmployeeTeamRepository employeeTeamRepository, IEmployeeRepository employeeRepository, IMapper mapper)
        {
            _teamRepository = teamRepository;
            _employeeTeamRepository = employeeTeamRepository;
            _employeeRepository = employeeRepository;
            _mapper = mapper;
        }

        public void CreateTeam(CreateTeamDto teamDto)
        {
            if (teamDto == null)
                throw new ArgumentNullException(nameof(teamDto));

            var team = _mapper.Map<Team>(teamDto);
            var employee = _employeeRepository.GetEmployee(teamDto.LeaderId);
            if (employee == null)
                throw new Exception("No employee found or admin can not be team leader!");

            _teamRepository.CreateTeam(team);
            var employeeTeamDto = new CreateEmployeeTeamDto { EmployeeId = team.LeaderId, TeamId = team.Id };
            var employeeTeam = _mapper.Map<EmployeeTeam>(employeeTeamDto);
            _employeeTeamRepository.AddEmployeeTeam(employeeTeam);
        }

        public IEnumerable<ReadTeamDto> GetAllTeams()
        {
            var teams = _teamRepository.GetAllTeams();
            var teamDtos = _mapper.Map<IEnumerable<ReadTeamDto>>(teams);

            return teamDtos;
        }

        public ReadTeamDto GetTeam(int id)
        {
            var team = _teamRepository.GetTeam(id);

            if (team == null)
                return null;

            var teamDto = _mapper.Map<ReadTeamDto>(team);

            return teamDto;
        }
        public void AddEmployeeToTeam(CreateEmployeeTeamDto dto)
        {
            if (dto == null)
                throw new ArgumentNullException(nameof(dto));

            var team = _teamRepository.GetTeam(dto.TeamId);

            if (team == null)
                throw new Exception("Team not found");

            var employee = _employeeRepository.GetEmployee(dto.EmployeeId);

            if (employee == null)
                throw new Exception("Employee not found");

            var employeeTeamDto = new CreateEmployeeTeamDto
            {
                EmployeeId = employee.Id,
                TeamId = team.Id
            };
            var employeeTeam = _mapper.Map<EmployeeTeam>(employeeTeamDto);

            _employeeTeamRepository.AddEmployeeTeam(employeeTeam);
        }
    }
}
