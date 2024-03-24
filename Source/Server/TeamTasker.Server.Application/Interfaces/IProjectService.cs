using TeamTasker.Server.Application.Dtos.Projects;

namespace TeamTasker.Server.Application.Interfaces
{
    public interface IProjectService
    {
        int CreateProject(CreateProjectDto projectDto);
        IEnumerable<ReadProjectDto> GetAllProjects();
        ReadProjectDto GetProject(int id);
    }
}
