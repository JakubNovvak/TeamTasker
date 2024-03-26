using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Teams;

namespace TeamTasker.Server.Application.Interfaces
{
    public interface IProjectService
    {
        ReadDetailedProjectDto CreateProject(CreateProjectDto projectDto);
        IEnumerable<ReadDetailedProjectDto> GetAllProjects();
        ReadDetailedProjectDto GetProjectById(int id);
        ReadDetailedProjectDto UpdateProject(CreateTeamDto projectDto);
    }
}
