﻿using AutoMapper;
using TeamTasker.Server.Application.Dtos.Comments;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository _teamRepository;
        private readonly IProjectRepository _projectRepository;
        private readonly IMapper _mapper;

        public TeamService(ITeamRepository teamRepository,IProjectRepository projectRepository,IMapper mapper)
        {
            _teamRepository = teamRepository;
            _projectRepository = projectRepository;
            _mapper = mapper;
        }

        public void CreateTeam(CreateTeamDto teamDto)
        {
            if (teamDto == null)
                throw new ArgumentNullException(nameof(teamDto));

            var team = _mapper.Map<Team>(teamDto);

            _teamRepository.CreateTeam(team);
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
    }
}
