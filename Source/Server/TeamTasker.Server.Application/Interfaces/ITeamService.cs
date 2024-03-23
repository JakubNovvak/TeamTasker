using TeamTasker.Server.Application.Dtos;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ITeamService
    {
        void CreateTeam(CreateTeamDto teamDto);
        IEnumerable<ReadTeamDto> GetAllTeams();
        ReadTeamDto GetTeam(int id);
    }
}
