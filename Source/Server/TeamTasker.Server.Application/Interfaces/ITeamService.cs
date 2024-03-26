using TeamTasker.Server.Application.Dtos.Teams;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ITeamService
    {
        ReadTeamDto CreateTeam(CreateTeamDto teamDto);
        IEnumerable<ReadTeamDto> GetAllTeams();
        ReadTeamDto GetTeamById(int id);
    }
}
