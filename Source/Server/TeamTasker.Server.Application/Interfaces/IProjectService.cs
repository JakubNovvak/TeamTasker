using TeamTasker.Server.Application.Dtos.Issues;
using TeamTasker.Server.Application.Dtos.Projects;

namespace TeamTasker.Server.Application.Interfaces
{
    public interface IProjectService
    {
        int CreateProject(CreateProjectDto projectDto);
        IEnumerable<ReadProjectDto> GetAllProjects();
        ReadProjectDto GetProject(int id);
      //  void UpdateProjectTeam(UpdateProjectTeamDto teamDto);
        void AddTeamToProject(AddTeamToProjectDto teamToProjectDto);
        void UpdateTeamToProject(UpdateTeamToProjectDto teamToProjectDto);
        GetProjectNameAndPictureDto GetProjectNameAndImagines(int id);
        void AddPictureToProject(AddPictureToProjectDto addPictureToProjectDto);

    }
}
