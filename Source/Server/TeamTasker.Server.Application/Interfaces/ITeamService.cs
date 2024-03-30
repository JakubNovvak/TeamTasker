using TeamTasker.Server.Application.Dtos;
using TeamTasker.Server.Application.Dtos.EmployeeTeam;
using TeamTasker.Server.Application.Dtos.Teams;

namespace TeamTasker.Server.Domain.Interfaces
{
    public interface ITeamService
    {
        void CreateTeam(CreateTeamDto teamDto);
        IEnumerable<ReadTeamDto> GetAllTeams();
        ReadTeamDto GetTeam(int id);
        void AddEmployeeToTeam(CreateEmployeeTeamDto dto);
    }
}
