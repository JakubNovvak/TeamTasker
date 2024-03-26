using AutoMapper;
using TeamTasker.Server.Application.Dtos.Teams;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Infrastructure.Services
{
    public class TeamService : ITeamService
    {
        private readonly ITeamRepository _teamRepository;
        private readonly IMapper _mapper;

        public TeamService(ITeamRepository teamRepository, IMapper mapper)
        {
            _teamRepository = teamRepository;
            _mapper = mapper;
        }

        public ReadTeamDto CreateTeam(CreateTeamDto teamDto)
        {
            if (teamDto == null)
                throw new ArgumentNullException(nameof(teamDto));

            var team = _mapper.Map<Team>(teamDto);
            _teamRepository.CreateTeam(team);

            var readTeamDto = _mapper.Map<ReadTeamDto>(team);
            return readTeamDto;
        }

        public IEnumerable<ReadTeamDto> GetAllTeams()
        {
            var teams = _teamRepository.GetAllTeams();
            var teamDtos = _mapper.Map<IEnumerable<ReadTeamDto>>(teams);

            return teamDtos;
        }

        public ReadTeamDto GetTeamById(int id)
        {
            var team = _teamRepository.GetTeam(id);

            if (team == null)
                throw new ArgumentNullException(nameof(team));

            var teamDto = _mapper.Map<ReadTeamDto>(team);

            return teamDto;
        }

        public ReadTeamDto UpdateTeam(CreateTeamDto teamDto)
        {
            throw new NotImplementedException();
        }
    }
}
