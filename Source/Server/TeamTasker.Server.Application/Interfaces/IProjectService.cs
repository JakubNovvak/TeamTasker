using TeamTasker.Server.Application.Dtos.Projects;

namespace TeamTasker.Server.Application.Interfaces
{
    public interface IProjectService
    {
        ReadProjectDto CreateProject(CreateProjectDto projectDto);
        IEnumerable<ReadProjectDto> GetAllProjects();
        ReadProjectDto GetProjectById(int id);
    }
}
