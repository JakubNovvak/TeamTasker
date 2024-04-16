using AutoMapper;
using System.Data;
using TeamTasker.Server.Application.Dtos.Projects;
using TeamTasker.Server.Application.Dtos.Users;
using TeamTasker.Server.Application.Interfaces;
using TeamTasker.Server.Domain.Entities;
using TeamTasker.Server.Domain.Interfaces;

namespace TeamTasker.Server.Application.Services
{
    public class ProjectService : IProjectService
    {

        private readonly IProjectRepository _projectRepository;
        private readonly ITeamRepository _teamRepository;
        private readonly IMapper _mapper;

        public ProjectService(IProjectRepository projectRepository,ITeamRepository teamRepository,IMapper mapper)
        {
            _projectRepository = projectRepository;
            _teamRepository = teamRepository;
            _mapper = mapper;
        }
        //1
        public int CreateProject(CreateProjectDto projectDto)
        {
            if (projectDto == null)
                throw new ArgumentNullException(nameof(projectDto));

            var project = _mapper.Map<Project>(projectDto);

            _projectRepository.CreateProject(project);

            return project.Id;
        }
        
        public void AddTeamToProject(AddTeamToProjectDto teamToProjectDto)
        {
            if (teamToProjectDto == null)
                throw new ArgumentNullException(nameof(teamToProjectDto));

            var team = _teamRepository.GetTeam(teamToProjectDto.TeamId);
            if (team == null)
                throw new Exception("Team not found");

            var project = _projectRepository.GetProject(teamToProjectDto.Id);
            if (project == null)
                throw new Exception("Project not found");

            var allProjects = _projectRepository.GetAllProjects();
            if(allProjects.Any(p => p.TeamId == team.Id))
            {
                throw new Exception("Team already in other project");
            }

            project.TeamId = team.Id;
            _projectRepository.UpdateProject(project);
        }
       
        public GetProjectNameAndPictureDto GetProjectNameAndImagines(int id)
        {
            var project = _projectRepository.GetProject(id);

            if (project == null)
                throw new Exception("Project not found");

            var projectDto = _mapper.Map<GetProjectNameAndPictureDto>(project);

            return projectDto;
        }

        public IEnumerable<ReadProjectDto> GetAllProjects()
        {
            var projects = _projectRepository.GetAllProjects();
            var projectDtos = _mapper.Map<IEnumerable<ReadProjectDto>>(projects);

            return projectDtos;
        }

        public ReadProjectDto GetProject(int id)
        {
            var project = _projectRepository.GetProject(id);

            if (project == null)
                throw new KeyNotFoundException();

            var projectDto = _mapper.Map<ReadProjectDto>(project);

            return projectDto;
        }

        public void AddPictureToProject(AddPictureToProjectDto addPictureToProjectDto)
        {
            if (addPictureToProjectDto == null)
                throw new ArgumentNullException(nameof(addPictureToProjectDto));

            var project = _projectRepository.GetProject(addPictureToProjectDto.Id);
            if(project == null)
                throw new Exception("Project not found");

            project.Picture = addPictureToProjectDto.Picture;
            _projectRepository.UpdateProject(project);
        }
        public IEnumerable<ReadEmployeeDto> GetEmployeesFromProject(int projectId)
        {
            var project = _projectRepository.GetProject(projectId);
            if (project == null)
                throw new Exception("Project not found!");
            var team = project.Team;
            if (team == null)
                throw new Exception("This project have not team assigned!");
            var employees = team.EmployeeTeams.Select(e => e.Employee).ToList();
            var employeeDtos = _mapper.Map<IEnumerable<ReadEmployeeDto>>(employees);
            return employeeDtos;
        }
        public void UpdateProjectStatus(UpdateProjectStatusDto dto)
        {
            if(dto == null)
                throw new ArgumentNullException(nameof(dto));
            var project = _projectRepository.GetProject(dto.Id);
            if (project == null)
                throw new Exception("Project not found!");
            project.Status = dto.Status;
            _projectRepository.UpdateProject(project);
        }
    }
}
